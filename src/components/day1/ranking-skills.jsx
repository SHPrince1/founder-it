"use client";
import React, { useState, useEffect } from "react";
import { Table, InputNumber, message } from "antd";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import style from "../../styles/day1.module.css";

const DraggableRow = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props["data-row-key"],
    });

  const styleRow = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...props.style,
  };

  return (
    <tr
      ref={setNodeRef}
      {...props}
      {...attributes}
      {...listeners}
      style={styleRow}
      className={style.draggableRow}
    />
  );
};

const RankingSkills = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://founderfit-backend.onrender.com/api/day1/get",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        const mapped = data.map((item, idx) => ({
          key: String(item.id),
          sn: String(idx + 1),
          activity: item.description,
          score: item.score,
          rank_order: item.rank_order,
        }));
        setDataSource(mapped);
      } catch (err) {
        console.error(err);
        message.error("Unable to load skills & passions");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ✅ Prevent empty scores
  const handleScoreChange = async (value, recordKey) => {
    if (value === null || value === undefined) {
      message.error("⚠️ Score cannot be left blank. Please enter 1–10.");
      return;
    }

    const updated = dataSource.map((item) =>
      item.key === recordKey ? { ...item, score: value } : item
    );
    setDataSource(updated);

    const item = updated.find((i) => i.key === recordKey);
    try {
      await fetch(
        `https://founderfit-backend.onrender.com/api/day1/update/${item.key}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            description: item.activity,
            score: item.score,
            rank_order: item.rank_order,
          }),
        }
      );
      message.success("✅ Updated successfully!");
    } catch (err) {
      console.error(err);
      message.error("Update failed");
    }
  };

  // ✅ Handle drag & drop ranking
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = dataSource.findIndex((i) => i.key === active.id);
    const newIndex = dataSource.findIndex((i) => i.key === over.id);
    const moved = arrayMove([...dataSource], oldIndex, newIndex);
    const reindexed = moved.map((item, idx) => ({
      ...item,
      sn: String(idx + 1),
      rank_order: idx + 1,
    }));
    setDataSource(reindexed);

    // 🚀 Send updated rank to backend
    reindexed.forEach(async (item) => {
      try {
        await fetch(
          `https://founderfit-backend.onrender.com/api/day1/update/${item.key}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              description: item.activity,
              score: item.score,
              rank_order: item.rank_order,
            }),
          }
        );
      } catch (err) {
        console.error("Rank update failed:", err);
      }
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const columns = [
    { dataIndex: "sn", align: "center", width: 50 },
    {
      title: "WHAT I AM PASSIONATE ABOUT / INTERESTED IN DOING",
      dataIndex: "activity",
    },
    {
      title: "EFFECTIVENESS (1 - 10)",
      dataIndex: "score",
      align: "right",
      render: (_, record) => (
        <InputNumber
          min={1}
          max={10}
          value={record.score}
          onChange={(value) => handleScoreChange(value, record.key)}
          className={style.inputRight}
        />
      ),
    },
  ];

  return (
    <div className={style.container}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={dataSource.map((i) => i.key)}
          strategy={verticalListSortingStrategy}
        >
          <Table
            className={style.customTable}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey="key"
            components={{ body: { row: DraggableRow } }}
            loading={loading}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default RankingSkills;

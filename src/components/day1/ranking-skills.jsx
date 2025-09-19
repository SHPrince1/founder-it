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

//  Custom draggable row
const DraggableRow = ({ children, ...restProps }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: restProps["data-row-key"],
    });

  const styleRow = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...restProps.style,
  };

  return (
    <tr
      ref={setNodeRef}
      style={styleRow}
      className={style.draggableRow}
      {...attributes}
      {...listeners}
      {...restProps}
    >
      {children}
    </tr>
  );
};

const RankingSkills = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  //  Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");
        if (!token) {
          message.error("No token found. Please log in again.");
          return;
        }

        const res = await fetch(
          "https://backend.thefounderfit.com/api/day1/get",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
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

  // ✅ Handle score update
  const handleScoreChange = async (value, recordKey) => {
    if (value === null || value === undefined) {
      message.error("⚠ Score cannot be left blank. Please enter 1–10.");
      return;
    }

    const updated = dataSource.map((item) =>
      item.key === recordKey ? { ...item, score: value } : item
    );
    setDataSource(updated);

    const item = updated.find((i) => i.key === recordKey);
    if (!item) return;

    try {
      await fetch(
        `https://backend.thefounderfit.com/api/day1/update/${item.key}`,
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
      message.success("Updated successfully!");
    } catch (err) {
      console.error(err);
      message.error("Update failed");
    }
  };

  // ✅ Handle drag & drop ranking
  const handleDragEnd = async (event) => {
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

    //  Only update the moved item to reduce API calls
    const movedItem = reindexed.find((i) => i.key === active.id);
    if (movedItem) {
      try {
        await fetch(
          `https://backend.thefounderfit.com/api/day1/update/${movedItem.key}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              description: movedItem.activity,
              score: movedItem.score,
              rank_order: movedItem.rank_order,
            }),
          }
        );
      } catch (err) {
        console.error("Rank update failed:", err);
      }
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const columns = [
    { title: "S/N", dataIndex: "sn", align: "center", width: 50 },
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

"use client";
import React, { useState } from "react";
import { Table, InputNumber } from "antd";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import style from "../../styles/day1.module.css";

const initialData = [
  { key: "1", sn: "1", activity: "Developing new business in emerging and existing markets", score: null },
  { key: "2", sn: "2", activity: "Selling anything to customers", score: null },
  { key: "3", sn: "3", activity: "Traveling around the world and experiencing new things", score: null },
  { key: "4", sn: "4", activity: "Vacationing and meeting new people", score: null },
  { key: "5", sn: "5", activity: "Learning new things on my own through exploration and experience", score: null },
  { key: "6", sn: "6", activity: "Volunteering at homeless shelters and food banks", score: null },
  { key: "7", sn: "7", activity: "Creating an understandable user experience and interface", score: null },
  { key: "8", sn: "8", activity: "Managing small teams", score: null },
  { key: "9", sn: "9", activity: "Basic accounting and financial reporting", score: null },
  { key: "10", sn: "10", activity: "Making Youtube and Tiktok videos", score: null },
  { key: "11", sn: "11", activity: "Creating new businesses", score: null },
  { key: "12", sn: "12", activity: "Creating music", score: null },
  { key: "13", sn: "13", activity: "Writing", score: null },
];

const DraggableRow = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props["data-row-key"],
  });

  const styleRow = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "move",
    ...props.style,
  };

  return <tr ref={setNodeRef} style={styleRow} {...props} {...attributes} {...listeners} />;
};

const RankingSkills = () => {
  const [dataSource, setDataSource] = useState(initialData);

  const handleScoreChange = (value, recordKey) => {
    const updated = dataSource.map((item) =>
      item.key === recordKey ? { ...item, score: value } : item
    );
    setDataSource(updated);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = dataSource.findIndex((item) => item.key === active.id);
    const newIndex = dataSource.findIndex((item) => item.key === over.id);
    const newData = arrayMove([...dataSource], oldIndex, newIndex);

    const updatedData = newData.map((item, index) => ({
      ...item,
      sn: String(index + 1),
    }));

    setDataSource(updatedData);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const columns = [
    {
      dataIndex: "sn",
      align: "center",
      width: 50,
    },
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
          items={dataSource.map((item) => item.key)}
          strategy={verticalListSortingStrategy}
        >
          <Table
            className={style.customTable}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey="key"
            components={{
              body: {
                row: DraggableRow,
              },
            }}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default RankingSkills;

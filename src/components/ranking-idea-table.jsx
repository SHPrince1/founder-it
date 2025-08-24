"use client";
import { useState, useEffect } from "react";
import { Table, InputNumber } from "antd";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MenuOutlined } from "@ant-design/icons";
import style from "../styles/idea-table-list.module.css";

// Dummy fallback data
const dummyData = [
  {
    key: "1",
    day: "Hotels remain expensive and subpar when you take a vacation as a family, especially in new countries",
    solution: "Buy and/or build out a portfolio of rental units to accommodate travelers that want a “home away from home”",
  },
  {
    key: "2",
    day: "People need short-term storage facilities when they are between rental properties, or their new place cannot accommodate everything they have",
    solution: "Acquire or build a small local self-storage facility, and improve operations via software and more responsive customer service",
  },
  {
    key: "3",
    day: "Try Before You Fly is needed to virtually see the hotel rooms you might want to rent so it does not upset your vacation",
    solution: "Platform that aggregates 3D hotel room walkthroughs with realtime availability to avoid “buying” wrong rooms",
  },
  {
    key: "4",
    day: "Vertical job board for climate-tech roles because these jobs are difficult to find and aggregate",
    solution: "Curated listings, hiring support, and candidate communities focused on climate startups via a website",
  },
  {
    key: "5",
    day: "Fleet Tracker for small delivery businesses as you want to know where trucks/buses/bikes are 24/7",
    solution: "Low-cost GPS + dashboard to track truck/bus/bike fleets",
  },
];

// 🔹 Sortable row wrapper
const SortableRow = ({ children, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props["data-row-key"] });

  const styleRow = {
    ...props.style,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={styleRow} {...props}>
      {children.map((child, index) => {
        // Attach listeners only to the first cell (the handle column)
        if (index === 0) {
          return (
            <td
              key={index}
              {...attributes}
              {...listeners}
              style={{ cursor: "grab", width: "40px", textAlign: "center" }}
            >
              <MenuOutlined style={{ fontSize: "18px", color: "#999" }} />
            </td>
          );
        }
        return child;
      })}
    </tr>
  );
};

const RankinkIdeaList = () => {
  const [data, setData] = useState(dummyData);
  const [interestLevels, setInterestLevels] = useState({});
  const [loading, setLoading] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleInterestChange = (key, value) => {
    setInterestLevels((prev) => ({
      ...prev,
      [key]: value || 0,
    }));
  };

  useEffect(() => {
    const fetchIdeas = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://your-backend-url.com/api/ideas"); //  replace with real API
        if (!res.ok) throw new Error("Failed to fetch");
        const backendData = await res.json();

        const formatted = backendData.map((item, index) => ({
          key: item.id || String(index + 1),
          day: item.problem || item.day,
          solution: item.solution,
        }));

        setData(formatted);
      } catch (error) {
        console.error("Using dummy data because API failed:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((prev) => {
        const oldIndex = prev.findIndex((item) => item.key === active.id);
        const newIndex = prev.findIndex((item) => item.key === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const columns = [
    {
      title: "", // handle column
      dataIndex: "sort",
      width: 40,
    },
    {
      title: "IDEA/PROBLEM",
      dataIndex: "day",
    },
    {
      title: "SOLUTION",
      dataIndex: "solution",
    },
    {
      title: "RATE YOUR LEVEL OF INTEREST IN THIS IDEA (1-10: 10 IS HIGH)",
      key: "interest",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={1}
          max={10}
          value={interestLevels[record.key]}
          onChange={(value) => handleInterestChange(record.key, value)}
        />
      ),
    },
  ];

  return (
    <div className={style.container}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={data.map((i) => i.key)} strategy={verticalListSortingStrategy}>
          <Table
            components={{ body: { row: SortableRow } }}
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={false}
            rowKey="key"
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default RankinkIdeaList;

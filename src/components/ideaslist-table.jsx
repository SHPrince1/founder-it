import { useState } from "react";
import { Table, InputNumber } from "antd";
import style from "../styles/idea-table-list.module.css";

const data = [
  {
    key: "1",
    day: "Fleet Tracker for small delivery businesses as you want to know where trucks/buses/bikes are 24/7",
    solution: "Low-cost GPS + dashboard to track truck/bus/bike fleets",
  },
  {
    key: "2",
    day: "Try Before You Fly is needed to virtually see the hotel rooms you might want to rent so it does not upset your vacation",
    solution:
      "Platform that aggregates 3D hotel room walkthroughs with realtime availability to avoid “buying” wrong rooms",
  },
  {
    key: "3",
    day: "People need short-term storage facilities when they are between rental properties, or their new place cannot accommodate everything they have",
    solution:
      "Acquire or build a small local self-storage facility, and improve operations via software and more responsive customer service",
  },
  {
    key: "4",
    day: "Vertical job board for climate-tech roles because these jobs are difficult to find and aggregate",
    solution:
      "Curated listings, hiring support, and candidate communities focused on climate startups via a website",
  },
  {
    key: "5",
    day: "Hotels remain expensive and subpar when you take a vacation as a family, especially in new countries",
    solution:
      "Buy and/or build out a portfolio of rental units to accommodate travelers that want a “home away from home”",
  },
];

const IdeaTableList = () => {
  const [interestLevels, setInterestLevels] = useState({});

  const handleInterestChange = (key, value) => {
    setInterestLevels((prev) => ({
      ...prev,
      [key]: value || 0,
    }));
  };

  const columns = [
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
    <div>
      <div className={style.container}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey="key"
        />
      </div>
    </div>
  );
};
export default IdeaTableList;
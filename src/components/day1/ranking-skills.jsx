import { useState } from "react";
import { Table, InputNumber } from "antd";
import style from "../../styles/day1.module.css";
import QuestionWithOptions from "../questionwithoptions";
const initialData = [
  {
    key: "1",
    sn: "1",
    activity: "Developing new business in emerging and existing markets",
    score: null,
  },
  {
    key: "2",
    sn: "2",
    activity: "Selling anything to customers",
    score: null,
  },
  {
    key: "3",
    sn: "3",
    activity: "Traveling around the world and experiencing new things",
    score: null,
  },
  {
    key: "4",
    sn: "4",
    activity: "Vacationing and meeting new people",
    score: null,
  },
  { key: "5", sn: "5", activity: "Learning new things on my own through exploration and experience", score: null },
  { key: "6", sn: "6", activity: "Volunteering at homeless shelters and food banks", score: null },
  {
    key: "7",
    sn: "7",
    activity: "Creating an understandable user experience and interface",
    score: null,
  },
  {
    key: "8",
    sn: "8",
    activity: "Managing small teams",
    score: null,
  },
  {
    key: "9",
    sn: "9",
    activity: "Basic accounting and financial reporting",
    score: null,
  },
  {
    key: "10",
    sn: "10",
    activity: "Making Youtube and Tiktok videos",
    score: null,
  },
  {
    key: "11",
    sn: "11",
    activity: "Creating new businesses",
    score: null,
  },
  {
    key: "12",
    sn: "12",
    activity: "Creating music",
    score: null,
  },
  {
    key: "13",
    sn: "13",
    activity: "Writing",
    score: null,
  },
];
const RankingSkills = () => {
  const [dataSource, setDataSource] = useState(initialData);

  const handleScoreChange = (value, recordKey) => {
    const updatedData = dataSource.map((item) =>
      item.key === recordKey ? { ...item, score: value } : item
    );
    setDataSource(updatedData);
  };

  const columns = [
    {
      //   title: "S/N",
      dataIndex: "sn",
      align: "center",
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
          // classNames={style.InputNumber}
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
    <div>
      <div className={style.container}>
        <Table
          className={style.customTable}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey="key"
        />
      </div>

      {/* <QuestionWithOptions /> */}
    </div>
  );
};

export default RankingSkills;

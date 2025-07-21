import { useState } from "react";
import { Table, InputNumber } from "antd";
import style from '../../styles/day1.module.css';

const initialData = [
  { key: "1", sn: "1", activity: "Traveling around the world and experiencing new things", score: null },
  { key: "2", sn: "2", activity: "Vacationing and meeting new people", score: null },
  { key: "3", sn: "3", activity: "CREATING NEW BUSINESS", score: null },
  { key: "4", sn: "4", activity: "Volunteering at homeless shelters and food banks", score: null },
  { key: "5", sn: "5", activity: "CREATING MUSIC", score: null },
  { key: "6", sn: "6", activity: "WRITING", score: null },
  { key: "7", sn: "7", activity: "MAKING YOUTUBE AND TIKTOK VIDEOS", score: null },
];

const PassionTable = () => {
  const [dataSource, setDataSource] = useState(initialData);

  const handleScoreChange = (value, recordKey) => {
    const updatedData = dataSource.map(item =>
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
    <div className={style.container}>
      <Table
        className={style.customTable}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="key"
      />
    </div>
  );
};

export default PassionTable;

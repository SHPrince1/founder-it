import { Table, Input, InputNumber } from "antd";
import style from "../../styles/day1.module.css";

const WhatIamGreatAtTable = ({ dataSource, onDataChange }) => {
  const handleActivityChange = (value, recordKey) => {
    const updated = dataSource.map((item) =>
      item.key === recordKey ? { ...item, activity: value } : item
    );
    onDataChange(updated);
  };

  const handleScoreChange = (value, recordKey) => {
    const updated = dataSource.map((item) =>
      item.key === recordKey ? { ...item, score: value } : item
    );
    onDataChange(updated);
  };

  const columns = [
    { dataIndex: "sn", align: "center" },
    {
      title: "WHAT I AM GOOD AT",
      dataIndex: "activity",
      render: (_, record) => (
        <Input
          value={record.activity}
          onChange={(e) => handleActivityChange(e.target.value, record.key)}
        />
      ),
    },
    {
      title: "EFFECTIVENESS (1–10)",
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

export default WhatIamGreatAtTable;

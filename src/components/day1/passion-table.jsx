import { useState } from "react";
import { Table, Input, InputNumber, message } from "antd";
import style from '../../styles/day1.module.css';

const initialData = [
  { key: "1", sn: "1", activity: "", score: null },
  { key: "2", sn: "2", activity: "", score: null },
  { key: "3", sn: "3", activity: "", score: null },
  { key: "4", sn: "4", activity: "", score: null },
  { key: "5", sn: "5", activity: "", score: null },
  { key: "6", sn: "6", activity: "", score: null },
  { key: "7", sn: "7", activity: "", score: null },
];

const PassionTable = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleActivityChange = (value, recordKey) => {
    const updatedData = dataSource.map((item) =>
      item.key === recordKey ? { ...item, activity: value } : item
    );
    setDataSource(updatedData);
  };

  const handleScoreChange = (value, recordKey) => {
    const updatedData = dataSource.map((item) =>
      item.key === recordKey ? { ...item, score: value } : item
    );
    setDataSource(updatedData);
  };

  const handleSubmit = async () => {
    const hasEmpty = dataSource.some(item => !item.activity || !item.score);
    if (hasEmpty) {
      message.warning("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/submit-passion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSource),
      });

      if (response.ok) {
        message.success("Data submitted successfully!");
      } else {
        message.error("Failed to submit data.");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while submitting.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      dataIndex: "sn",
      align: "center",
    },
    {
      title: "WHAT I AM PASSIONATE ABOUT / INTERESTED IN DOING",
      dataIndex: "activity",
      render: (_, record) => (
        <Input
          value={record.activity}
          onChange={(e) => handleActivityChange(e.target.value, record.key)}
        />
      ),
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
      <Table
        className={style.customTable}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="key"
      />

      <div style={{ marginTop: 20, textAlign: "right" }}>
        <button type="primary" onClick={handleSubmit} loading={loading}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PassionTable;

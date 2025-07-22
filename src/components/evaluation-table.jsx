import { useState } from "react";
import { Table, InputNumber } from "antd";
import style from "../styles/idea-table-list.module.css";

const data = [
  {
    key: "1",
    day: "Problem 1",
    skills: "Skill A, Skill B",
  },
  {
    key: "2",
    day: "Problem 2",
    skills: "Skill C, Skill D",
  },
  {
    key: "3",
    day: "Problem 3",
    skills: "Skill E",
  },
  {
    key: "4",
    day: "Problem 4",
    skills: "Skill F, Skill G",
  },
];

const EvaluationTable = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (key, field, value) => {
    setInputs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: Number(value) || 0,
      },
    }));
  };

  const getTotal = (field) => {
    return Object.values(inputs).reduce((sum, row) => sum + (row?.[field] || 0), 0);
  };

  const columns = [
    {
      title: "IDEA/PROBLEM",
      dataIndex: "day",
    },
    {
      title: "Skills Required for Idea to Succeed",
      dataIndex: "skills",
    },
    {
      title: "NEEDS",
      key: "needs",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={10} // ✅ Limit to max 10
          value={inputs[record.key]?.needs}
          onChange={(val) => handleInputChange(record.key, "needs", val)}
        />
      ),
    },
    {
      title: "I HAVE",
      key: "have",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={10} // ✅ Limit to max 10
          value={inputs[record.key]?.have}
          onChange={(val) => handleInputChange(record.key, "have", val)}
        />
      ),
    },
    {
      title: "GAP",
      key: "gap",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={10} // ✅ Limit to max 10
          value={inputs[record.key]?.gap}
          onChange={(val) => handleInputChange(record.key, "gap", val)}
        />
      ),
    },
  ];

  return (
    <div className={style.container}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <strong>Total</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="center">
              <strong>{getTotal("needs")}</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="center">
              <strong>{getTotal("have")}</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4} align="center">
              <strong>{getTotal("gap")}</strong>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default EvaluationTable;

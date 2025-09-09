import { useState } from "react";
import { Table, InputNumber, Divider } from "antd";
import style from "../styles/idea-table-list.module.css";

// Part 1 Data
const dataPart1 = [
  { key: "1", skills: "Product" },
  { key: "2", skills: "Sales" },
  { key: "3", skills: "Sector experience/understanding" },
  { key: "4", skills: "Technology" },
  { key: "5", skills: "Relatioships" },
  { key: "6", skills: "Distribution" },
  { key: "7", skills: "Capital" },
  { key: "8", skills: "Legal/Compliance" },
  { key: "9", skills: "Competetive Positioning" },
  { key: "10", skills: "Management" },
];

// Part 2 Data
const dataPart2 = [
  { key: "3", skills: "Skill E" },
  { key: "4", skills: "Skill F, Skill G" },
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

  const getTotal = (field, keys) => {
    return keys.reduce((sum, key) => sum + (inputs[key]?.[field] || 0), 0);
  };

  const keysPart1 = dataPart1.map((item) => item.key);
  const keysPart2 = dataPart2.map((item) => item.key);

  // 💡 Table 1 Columns
  const columnsPart1 = [
    {
      title: "CAPABILITIES ASSESMENT SKILLS REQUIRED FOR IDEA TO SUCCEED",
      dataIndex: "skills",
    },
    {
      title: "NEEDS",
      key: "needs",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={10}
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
          max={10}
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
          max={10}
          value={inputs[record.key]?.gap}
          onChange={(val) => handleInputChange(record.key, "gap", val)}
        />
      ),
    },
  ];

  // 💡 Table 2 Columns (different headings)
  const columnsPart2 = [
    {
      title: "FIT ASSESSMENT Things I Want vs What Idea Offers",
      dataIndex: "skills",
    },
    {
      title: "OFFERS",
      key: "needs",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={10}
          value={inputs[record.key]?.needs}
          onChange={(val) => handleInputChange(record.key, "needs", val)}
        />
      ),
    },
    {
      title: "I WANT",
      key: "have",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={10}
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
          max={10}
          value={inputs[record.key]?.gap}
          onChange={(val) => handleInputChange(record.key, "gap", val)}
        />
      ),
    },
  ];

  return (
    <div className={style.container}>
      <h3>Part 1</h3>
      <Table
        columns={columnsPart1}
        dataSource={dataPart1}
        pagination={false}
        rowKey="key"
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell colSpan={2}><strong>Subtotal</strong></Table.Summary.Cell>
            <Table.Summary.Cell align="center"><strong>{getTotal("needs", keysPart1)}</strong></Table.Summary.Cell>
            <Table.Summary.Cell align="center"><strong>{getTotal("have", keysPart1)}</strong></Table.Summary.Cell>
            <Table.Summary.Cell align="center"><strong>{getTotal("gap", keysPart1)}</strong></Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />

      <Divider />

      <h3>Part 2</h3>
      <Table
        columns={columnsPart2}
        dataSource={dataPart2}
        pagination={false}
        rowKey="key"
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell colSpan={2}><strong>Subtotal</strong></Table.Summary.Cell>
            <Table.Summary.Cell align="center"><strong>{getTotal("needs", keysPart2)}</strong></Table.Summary.Cell>
            <Table.Summary.Cell align="center"><strong>{getTotal("have", keysPart2)}</strong></Table.Summary.Cell>
            <Table.Summary.Cell align="center"><strong>{getTotal("gap", keysPart2)}</strong></Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />

      <Divider />

      <h3>Overall Total</h3>
      <Table
        columns={[
          {
            title: "Total of All Sections",
            colSpan: 2,
            render: () => <strong>Total</strong>,
          },
          {},
          {
            title: "Total NEEDS",
            render: () => <strong>{getTotal("needs", [...keysPart1, ...keysPart2])}</strong>,
            align: "center",
          },
          {
            title: "Total I HAVE",
            render: () => <strong>{getTotal("have", [...keysPart1, ...keysPart2])}</strong>,
            align: "center",
          },
          {
            title: "Total GAP",
            render: () => <strong>{getTotal("gap", [...keysPart1, ...keysPart2])}</strong>,
            align: "center",
          },
        ]}
        dataSource={[{}]}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
};

export default EvaluationTable;

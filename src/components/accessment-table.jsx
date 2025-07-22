import { useState } from "react";
import { Table, InputNumber } from "antd";
import style from "../styles/idea-table-list.module.css";

const data = [
  { key: "1", prompt: "What is your product idea?" },
  { key: "2", prompt: "What problem does it solve?" },
  { key: "3", prompt: "Who is your target user?" },
];

const AccessmentTable = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (key, field, value) => {
    setInputs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value || 0,
      },
    }));
  };

  const getTotal = (field) => {
    return Object.values(inputs).reduce((sum, row) => sum + (row?.[field] || 0), 0);
  };

  const columns = [
    {
      title: "Prompt",
      dataIndex: "prompt",
      key: "prompt",
    },
    {
    //   title: "Response A (₦)",
      key: "responseA",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          value={inputs[record.key]?.responseA || 0}
          onChange={(val) => handleChange(record.key, "responseA", val)}
          formatter={(val) => `₦${val}`}
          parser={(val) => val.replace(/₦\s?|(,*)/g, "")}
        />
      ),
    },
    {
      title: "MONTHLY(₦)",
      key: "responseB",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={0}
          value={inputs[record.key]?.responseB || 0}
          onChange={(val) => handleChange(record.key, "responseB", val)}
          formatter={(val) => `₦${val}`}
          parser={(val) => val.replace(/₦\s?|(,*)/g, "")}
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
        bordered
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}><strong>Sub Total</strong></Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="center">
              <strong>₦{getTotal("responseA").toLocaleString()}</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="center">
              <strong>₦{getTotal("responseB").toLocaleString()}</strong>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default AccessmentTable;

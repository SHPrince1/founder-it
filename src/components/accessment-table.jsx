import { useState } from "react";
import { Table, InputNumber } from "antd";
import style from "../styles/idea-table-list.module.css";

const data = [
  { key: "1", prompt: "Price at which you can sell one unit of what you have", responseA: "A" },
  { key: "2", prompt: "How much does it cost to produce one unit?", responseA: "B" },
  { key: "3", prompt: "How many units will you sell in one month?", responseA: "C" },

  { key: "4", prompt: "Gross Revenue", responseA: "A*C" },
  { key: "5", prompt: "Cost of sales", responseA: "B*C" },
  { key: "6", prompt: "Gross Profit", responseA: "(A-B)*C" },

  { key: "7", prompt: "Expenses (For 1 Month)", responseA: "" },
  { key: "8", prompt: "People", responseA: "" },
  { key: "9", prompt: "Rent", responseA: "" },
  { key: "10", prompt: "Lease", responseA: "" },
  { key: "11", prompt: "Transportation", responseA: "" },
  { key: "12", prompt: "Loan Payment", responseA: "" },
  { key: "13", prompt: "Sales and Marketing", responseA: "" },
  { key: "14", prompt: "Distribution/Partnerships", responseA: "" },
  { key: "15", prompt: "Other", responseA: "" },
  { key: "16", prompt: "TOTAL EXPENSES (D)", responseA: "D" },
];

const AccessmentTable = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (key, value) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value || 0,
    }));
  };

  // Base values
  const A = inputs["1"] || 0;
  const B = inputs["2"] || 0;
  const C = inputs["3"] || 0;

  // Calculations
  const grossRevenue = A * C;
  const costOfSales = B * C;
  const grossProfit = (A - B) * C;

  // Expenses
  const expenseKeys = ["8", "9", "10", "11", "12", "13", "14", "15"];
  const totalExpenses = expenseKeys.reduce((sum, k) => sum + (inputs[k] || 0), 0);

  // Net Profit
  const netProfit = grossProfit - totalExpenses;

  // Net Profit Percentage of Gross Revenue
  const netProfitPercent = grossRevenue > 0 ? (netProfit / grossRevenue) * 100 : 0;

  const columns = [
    {
      title: "Prompt",
      dataIndex: "prompt",
      key: "prompt",
    },
    {
      title: "",
      dataIndex: "responseA",
      key: "responseA",
      align: "center",
    },
    {
      title: "MONTHLY(₦)",
      key: "responseB",
      align: "center",
      render: (_, record) => {
        switch (record.key) {
          case "1":
          case "2":
          case "3":
          case "8":
          case "9":
          case "10":
          case "11":
          case "12":
          case "13":
          case "14":
          case "15":
            return (
              <InputNumber
                min={0}
                value={inputs[record.key] || 0}
                onChange={(val) => handleChange(record.key, val)}
                style={{ width: "120px" }} // ✅ fixed width for neatness
                formatter={(val) => `₦${val}`}
                parser={(val) => val.replace(/₦\s?|(,*)/g, "")}
              />
            );

          case "4":
            return <strong>₦{grossRevenue.toLocaleString()}</strong>;
          case "5":
            return <strong>₦{costOfSales.toLocaleString()}</strong>;
          case "6":
            return <strong>₦{grossProfit.toLocaleString()}</strong>;
          case "16":
            return <strong>₦{totalExpenses.toLocaleString()}</strong>;

          default:
            return null;
        }
      },
    },
  ];

  // 🔹 Group styling for box segmentation
  const rowClassName = (_, index) => {
    if (index >= 0 && index <= 2) {
      if (index === 0) return `${style.groupRow} ${style.groupStart}`;
      if (index === 2) return `${style.groupRow} ${style.groupEnd}`;
      return style.groupRow;
    }
    if (index >= 3 && index <= 5) {
      if (index === 3) return `${style.groupRow} ${style.groupStart}`;
      if (index === 5) return `${style.groupRow} ${style.groupEnd}`;
      return style.groupRow;
    }
    if (index >= 6 && index <= 15) {
      if (index === 6) return `${style.groupRow} ${style.groupStart}`;
      if (index === 15) return `${style.groupRow} ${style.groupEnd}`;
      return style.groupRow;
    }
    return "";
  };

  return (
    <div className={style.container}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
        bordered
        rowClassName={rowClassName}
        scroll={{ x: true }} // ✅ makes it scrollable on small screens
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>
              <strong>Net Profit (Pre-Tax)</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="center">
              <strong>[(A-B)*C] - D</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="center">
              <strong>
                ₦{netProfit.toLocaleString()} ({netProfitPercent.toFixed(2)}%)
              </strong>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default AccessmentTable;

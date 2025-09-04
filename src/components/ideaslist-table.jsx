import { useState } from "react";
import { Table, Input, InputNumber, message } from "antd";
import style from "../styles/idea-table-list.module.css";
import ButtonNextPre from "../components/button-next-pre";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const IdeaTableList = () => {
  const navigate = useNavigate();

  //  State for rows
  const [rows, setRows] = useState([
    { key: "1", day: "", solution: "", interest: 0 },
    { key: "2", day: "", solution: "", interest: 0 },
    { key: "3", day: "", solution: "", interest: 0 },
    { key: "4", day: "", solution: "", interest: 0 },
    { key: "5", day: "", solution: "", interest: 0 },
  ]);

  //  Handle changes
  const handleChange = (key, field, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.key === key ? { ...row, [field]: value } : row
      )
    );
  };

  const handlePrev = () => navigate("/day17-25");

  const handleNext = async () => {
    // Allow proceeding if at least one row is filled
    const filledRows = rows.filter(
      (row) => row.day.trim() && row.solution.trim() && row.interest > 0
    );

    if (filledRows.length === 0) {
      message.warning("⚠️ Please fill at least one idea before proceeding.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://founderfit-backend.onrender.com/api/dayX/save", // replace with correct endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ideas: filledRows }), //  send only filled rows
        }
      );

      if (!response.ok) throw new Error("Failed to save");

      message.success("Ideas saved successfully!");
      navigate("/next-page"); // replace with actual next route
    } catch (err) {
      console.error("Error saving ideas:", err);
      message.error(" Failed to save your ideas");
    }
  };

  const columns = [
    {
      title: "IDEA / PROBLEM",
      dataIndex: "day",
      width: "40%",
      render: (_, record) => (
        <TextArea
          rows={4} //  made larger
          placeholder="Enter your idea or problem"
          value={record.day}
          onChange={(e) => handleChange(record.key, "day", e.target.value)}
          style={{ width: "100%" }}
        />
      ),
    },
    {
      title: "SOLUTION",
      dataIndex: "solution",
      width: "40%",
      render: (_, record) => (
        <TextArea
          rows={4} //  made larger
          placeholder="Enter solution"
          value={record.solution}
          onChange={(e) =>
            handleChange(record.key, "solution", e.target.value)
          }
          style={{ width: "100%" }}
        />
      ),
    },
    {
      title: "RATE YOUR INTEREST (1-10)",
      dataIndex: "interest",
      width: "20%",
      align: "center",
      render: (_, record) => (
        <InputNumber
          min={1}
          max={10}
          value={record.interest}
          onChange={(value) => handleChange(record.key, "interest", value)}
        />
      ),
    },
  ];

  return (
    <div className={style.container}>
      <Table
        columns={columns}
        dataSource={rows}
        pagination={false}
        rowKey="key"
      />
      <div style={{ marginTop: "16px", textAlign: "right" }}>
        <ButtonNextPre
          buttons={[
            { label: "PREVIOUS", onClick: handlePrev },
            { label: "NEXT", onClick: handleNext },
          ]}
        />
      </div>
    </div>
  );
};

export default IdeaTableList;

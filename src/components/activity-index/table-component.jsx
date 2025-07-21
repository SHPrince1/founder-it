import { useState } from "react";
import { Table, Checkbox } from "antd";
import style from "../../styles/tablecomponent.module.css"; // Adjust path if needed

const data = [
  {
    key: "1",
    day: "DAY 1",
    activity: "Identify your skills and interest",
    link: "/day1",
  },
  {
    key: "2",
    day: "DAY 2",
    activity: "What are you looking for",
    link: "/day2",
  },
  {
    key: "3",
    day: "DAY 3-16",
    activity: "Finding the right idea(s)",
    link: "/day3",
  },
  {
    key: "4",
    day: "DAY 17-25",
    activity: "Testing your idea with target market",
    link: "/day4",
  },
  {
    key: "5",
    day: "DAY 26",
    activity: "Testing something else",
    link: "/day5",
  },
  {
    key: "6",
    day: "DAY 27",
    activity: "Financial sanity Check",
    link: "/day6",
  },
  { key: "7", day: "DAY 28", activity: "Ready to launch", link: "/day7" },
];

const TableComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleCheckboxChange = (key) => {
    setSelectedRowKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const columns = [
    {
      title: "ACTIVITIES BY DAY(S)",
      dataIndex: "day",
    },
    {
      title: "ACTIVITY",
      dataIndex: "activity",
      render: (text, record) => <a href={record.link}>{text}</a>,
    },
    {
      title: "SELECT IF COMPLETE",
      key: "checkbox",
      render: (_, record) => (
        <Checkbox
          className={style.cusCheckbox}
          checked={selectedRowKeys.includes(record.key)}
          onChange={() => handleCheckboxChange(record.key)}
        />
      ),
      //   width: 150,
      align: "center",
    },
  ];

  return (
    <div className={style.scrollContainer}>
      <Table
        className={style.customTable}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
      />
    </div>
  );
};

export default TableComponent;

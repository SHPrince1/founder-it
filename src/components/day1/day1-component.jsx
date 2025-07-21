import { useState } from 'react';
import { Table, InputNumber } from 'antd';
import style from '../../styles/day1.module.css';

const initialData = [
  {
    key: '1',
    sn: '1',
    activity: 'Developing new business in emerging and existing markets',
    score: null,
  },
  {
    key: '2',
    sn: '2',
    activity: 'Selling anything to customers',
    score: null,
  },
  {
    key: '3',
    sn: '3',
    activity: 'Creating an understandable user experience and interface',
    score: null,
  },
  {
    key: '4',
    sn: '4',
    activity: 'Managing small teams',
    score: null,
  },
  {
    key: '5',
    sn: '5',
    activity: 'Basic accounting and financial reporting',
    score: null,
  },
  {
    key: '6',
    sn: '6',
    activity: 'Basic accounting and financial reporting',
    score: null,
  },
];

const WhatIamGreatAtTable = () => {
  const [dataSource, setDataSource] = useState(initialData);

  const handleScoreChange = (value, recordKey) => {
    const updatedData = dataSource.map((item) => {
      if (item.key === recordKey) {
        return { ...item, score: value };
      }
      return item;
    });
    setDataSource(updatedData);
  };

  const columns = [
    {
    //   title: 'S/N',
      dataIndex: 'sn',
      align: 'center',
    },
    {
      title: 'WHAT I AM GOOD AT',
      dataIndex: 'activity',
    },
    {
      title: 'EFFECTIVENESS ON (1–10)',
      dataIndex: 'score',
      align: 'right',
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

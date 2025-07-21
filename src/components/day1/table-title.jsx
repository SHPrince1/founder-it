// components/TableTitle.jsx

import React from 'react';
import styles from '../../styles/tabletitle.module.css'; 

const TableTitle = ({ subtitle, title }) => {
  return (
    <div className={styles.tableTitle}>
      <h5>{subtitle}</h5>
      <h1>{title}</h1>
    </div>
  );
};

export default TableTitle;

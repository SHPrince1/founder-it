import React from "react";
import style from "../../styles/table.module.css";
import TableComponent from "../activity-index/table-component";

const Table = () => {
  return (
    <div>
      <div className={style.tableHeader}>
        
       
      </div>
      <div className={style.tableComponentDiv}>
        <TableComponent />
      </div>
    </div>
  );
};

export default Table;

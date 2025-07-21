import React from "react";
// import style2 from "../styles/EditText.module.css";
import style2 from "../styles/edithtext.module.css";
const EditText = ({ message }) => {
  return (
    <div className={style2.rank}>
      <p>{message}</p>
    </div>
  );
};

export default EditText;

// components/button-next-pre.jsx
import React from "react";
import style from "../styles/save-sub-btn.module.css";

const ButtonNextPre = ({ buttons = [] }) => {
  return (
    <div className={style.BtnDiv}>
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={btn.onClick}
          style={{
            backgroundColor: btn.label.toUpperCase() === "PREVIOUS" ? "black" : "#Fabb14", // black for previous, yellow for others
            color: btn.label.toUpperCase() === "PREVIOUS" ? "white" : "black",
            border: "none",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonNextPre;

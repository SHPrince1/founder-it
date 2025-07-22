// components/InstructionSteps.jsx
import React from "react";
import style from "../styles/instructionsteps.module.css"; // Update to your actual CSS file path

const InstructionSteps = ({ title, step1, step2, step3, step4, step5 }) => {
  return (
    <div className={style.textBox}>
      <h1>{title}</h1>
      <div className={style.textNumBox}>
        <div className={style.textNum}>
          <p className={style.num}>1</p>
          <p>{step1}</p>
        </div>
        <div className={style.textNum}>
          <p className={style.num}>2</p>
          <p>{step2}</p>
        </div>
        <div className={style.textNum}>
          <p className={style.num}>3</p>
          <p>{step3}</p>
        </div>
        <div className={style.textNum}>
          <p className={style.num}>4</p>
          <p>{step4}</p>
        </div>
        <div className={style.textNum}>
          <p className={style.num}>5</p>
          <p>{step5}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructionSteps;

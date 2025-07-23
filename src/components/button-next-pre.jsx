import React from 'react';
import style from '../styles/save-sub-btn.module.css'

const ButtonNextPre = () => {
  return (
    <div>
     <div className={style.BtnDiv}>
          <button className={style.BtnDivSave}>SAVE</button>
          <button className={style.BtnDivUbmit}>SUBMIT</button>
        </div>
    </div>
  );
}

export default ButtonNextPre;

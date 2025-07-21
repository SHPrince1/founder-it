import React from "react";
import style from '../../styles/table-banner.module.css';

const TableBanner = ({ title, description, image, imageAlt = "", imageWidth = 950 }) => {
  return (
    <div>
      <div className={style.textSection}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className={style.vidSection}>
        <img src={image} alt={imageAlt} width={imageWidth} />
      </div>
    </div>
  );
};

export default TableBanner;

import React from "react";
import Fb from "../assets/fb.svg";
import X from "../assets/x.svg";
import Instagram from "../assets/instagram.svg";

import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div>
          <p>Copyright &copy; <span style={{color: '#f7b084' }}>2025, All Right Reserved</span></p>
        </div>
        <div className={style.sMedia}>
          <div>
            {" "}
            <h5>SOCIAL MEDIA: </h5>{" "}
          </div>
          <div className={style.mediaHandle}>
            <a href="/">
              <img src={Fb}  alt=""/>
            </a>
            <a href="/">
              <img src={X}  alt=""/>
            </a>
            <a href="/">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

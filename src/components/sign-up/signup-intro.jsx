import React from "react";
import FFlogo from "../../assets/FFlogo.png";
import GroupBook from "../../assets/multygroup.png";
import SingleBook from "../../assets/singlebook.png";
import style from '../../styles/signup-intro.module.css'


const SignupIntro = () => {
  return (
    <div>
      <div className={style.bannerSection}>
        <div className={style.logDiv}>
          <img src={FFlogo} alt="" width={100} />
        </div>

        <div className={style.logoTextSection}>
          <h2>Join the 28-Day Business Launch Challenge</h2>
          <p>
            Create your free account to start building your dream business — one
            step at a time.
          </p>
        </div>
        <div className={style.bookSection}>
          <img
            className={style.bookSectionImg}
            src={GroupBook}
            alt=""
            width={""}
            height={350}
          />
        </div>

        <div className={style.singleBook}>
          <img src={SingleBook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignupIntro;

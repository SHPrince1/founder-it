import React from "react";
import style from "../../styles/banner.module.css";

// imported images
import Man from "../../assets/author.jpg";
import Arrow from "../../assets/arrow-right-02.png";

const Banner = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.box1}>
          {/* <div className={style.availableDiv}>
            <div className={style.dash}></div>
            <p>AVAILABLE FOR PRE-ORDER NOW</p>
          </div> */}
          <div className={style.turn}>
            <h2>TURN YOUR BUSINESS DREAM INTO REALITY-IN JUST 28 DAYS?</h2>
          </div>
          {/* <div className={style.ready}></div> */}
          <div className={style.discover}>
            <h5>Ready to launch a business but stock on the right idea?</h5>
            <p>
              The 28-Day Business Launch Challenge is your fast-track, hands-on
              journey from uncertainty to a validated, launch-ready
              business—guided by one of Africa’s most accomplished startup
              founders.
            </p>
          </div>

          <div className={style.buttonDiv}>
            <a href="/signup-page">
              <button className={style.amazon}>
                <p>JOIN THE CHALLENGE</p>
                <img src={Arrow} width={20} alt="" />
              </button>
            </a>
          </div>
        </div>

        <div className={style.box2}>
          <img src={Man} alt="" width={450} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

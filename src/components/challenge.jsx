import React from "react";
import Book2 from "../assets/book2.jpg";
import Arm from "../assets/arm.svg";
import Author from "../assets/author.jpg";
import Ellipse from "../assets/Ellipse 38893.svg";
import style from "../styles/challenge.module.css";

const Challenge = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Subcontainer}>
          <div>
            <img src={Book2} />
          </div>

          <div className={style.box2}>
            <div className={style.imgText}>
              <img src={Arm} />
              <div className={style.text}>
                <h4>Week1:</h4>
                <p>Discover your strength passion and resources</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Arm} />
              <div className={style.text}>
                <h4>Week1:</h4>
                <p>Discover your strength passion and resources</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Arm} />
              <div className={style.text}>
                <h4>Week1:</h4>
                <p>Discover your strength passion and resources</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Arm} />
              <div className={style.text}>
                <h4>Week1:</h4>
                <p>Discover your strength passion and resources</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Arm} />
              <div className={style.text}>
                <h4>Week1:</h4>
                <p>Discover your strength passion and resources</p>
              </div>
            </div>
            <button>Join the 28 Day Challenge</button>
          </div>
        </div>

        <div className={style.MeetSection}>
          <div className={style.textSection}>
            <h1>MEET IKE EZE - ENTREPRENEUR, MENTOR, VISIONARY</h1>
            <div className={style.tickTextDiv}>
              <div className={style.tickText}>
                <img src={Ellipse} width={20} />
                <p>Founded and exited 3 tech startup by age 30</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} />
                <p>Founded and exited 3 tech startup by age 30</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} />
                <p>Founded and exited 3 tech startup by age 30</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} />
                <p>Founded and exited 3 tech startup by age 30</p>
              </div>
            </div>
          </div>
          <div className={style.imageSection}>
            <img src={Author} width={400} alt="" />
          </div>
        </div>

        <div className={style.journey}>
          <div className={style.rightText}>
            <h1>YOUR BUSINESS JOURNEY STARTS NOW</h1>
            <p>
              Join Thousands of aspiring entreneurs who've turned uncertainty
              into unstoppablemomentum. your dream business is one stap away
            </p>
            <button>Join the 28 Day Challenge</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge;

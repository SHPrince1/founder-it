import React from "react";
import Book2 from "../assets/book2.jpg";
import Arm from "../assets/arm.svg";
import Piece from '../assets/piece.svg';
import Team from '../assets/team.svg';
import Growth from '../assets/growth.svg'
import Author from "../assets/author.jpg";
import Ellipse from "../assets/Ellipse 38893.svg";
import style from "../styles/challenge.module.css";

const Challenge = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Subcontainer}>
          <div className={style.book2}>
            <img src={Book2} alt="" />
          </div>

          <div className={style.box2}>
            <div className={style.imgText}>
              <img src={Arm} alt="" />
              <div className={style.text}>
                <h4>Week1:</h4>
                <p>Discover your strength passion and resources</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Piece} alt="" />
              <div className={style.text}>
                <h4>Week2:</h4>
                <p>Brainstorm and refine ideas using a smart ranking method</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Team} alt="" />
              <div className={style.text}>
                <h4>Week3:</h4>
                <p>Validate ideas-interview real people, research demand.</p>
              </div>
            </div>
            <div className={style.imgText}>
              <img src={Growth} alt="" />
              <div className={style.text}>
                <h4>Week4:</h4>
                <p>Finalize your idea, crunch numbers and launch</p>
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
                <img src={Ellipse} width={20} alt="" />
                <p>Founded and exited 3 tech startup by age 30</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>Background in engineering, finance and venture capital</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>MBA from Wharton, advisor, and startup mentor</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>Leads with strategy, insight and real-world experience</p>
              </div>
              <div className={style.want}>
                <h4>WANT MORE INSIGHT FROM IKE?</h4>
                <button>JOIN IKE'S SUBSTACK NEWSLETTER</button>
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
              into unstoppable momentum. your dream business is one step away
            </p>
            <button>Join the 28 Day Challenge</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge;

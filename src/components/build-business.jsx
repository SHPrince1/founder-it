import React from "react";
import style from "../styles/build-business.module.css";
import Idea from "../assets/arm.svg";
import Light from "../assets/lamp.svg";
import Winner from "../assets/win.svg";
import Amazon from "../assets/black amazon logo.png";
import AppleBook from "../assets/applebook.jpg";
import Top from "../assets/shapetop.jpg";
const BuildBusiness = () => {
  return (
    <>
      <div className={style.zigzagImage}>
        <img src={Top} alt="" />
      </div>
      <div className={style.container}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L20,224C40,192,80,128,120,122.7C160,117,200,171,240,181.3C280,192,320,160,360,144C400,128,440,128,480,144C520,160,560,192,600,208C640,224,680,224,720,213.3C760,203,800,181,840,186.7C880,192,920,224,960,213.3C1000,203,1040,149,1080,160C1120,171,1160,245,1200,240C1240,235,1280,149,1320,138.7C1360,128,1400,192,1420,224L1440,256L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg> */}
        <div className={style.box1}>
          <h2>BUILD A BUSINESS THAT FITS YOUR LIFE-AND THRIVES</h2>
        </div>
        <div className={style.cardDiv}>
          <div className={style.card}>
            <div className={style.ideaInward}>
              <img src={Light} alt="" />
              <p className={style.look}>Looking Inwards</p>
            </div>
            <div>
              <h6>Finding Ideas Through Self-Discovery</h6>
            </div>
            <div className={style.uncover}>
              <p>
                uncover your strength, passion and personal goals to build a
                business around your lifestyle- not just your wallet
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.ideaInward}>
              <img src={Idea} alt="" />
              <p className={style.look}>Looking Outward</p>
            </div>
            <div>
              <h6>VALIDATING BUSINESS IDEAS IN THE MARKET</h6>
            </div>
            <div className={style.uncover}>
              <p>
                Become a market detective-spot opportunities, study trends and
                uncover what customers truly want
              </p>
            </div>
          </div>
          {/* last card */}
          <div className={style.card}>
            <div className={style.ideaInward}>
              <img src={Winner} alt="" />
              <p className={style.look}>Narrowing and testing</p>
            </div>
            <div>
              <h6>Launch with confidence</h6>
            </div>
            <div className={style.uncover}>
              <p>
                Use a proven ranking system and a 28 day plan to test and launch
                your best idea -like a pro
              </p>
            </div>
          </div>
        </div>
        <div className={style.buttonDiv}>
          <button className={style.amazon}>
            <img src={Amazon} width={30} alt="" />
            Buy on Amazon
          </button>{" "}
          <button className={style.apple}>
            {" "}
            <img src={AppleBook} alt="" width={30} />
            Buy on Apple Books
          </button>
        </div>
      </div>
      <div className={style.zigzagImage}>
        <img src={Top} alt="" />
      </div>
    </>
  );
};

export default BuildBusiness;

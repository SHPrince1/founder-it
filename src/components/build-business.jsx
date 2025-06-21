import React from "react";
import style from "../styles/build-business.module.css";
import Idea from '../assets/arm.svg'
import Amazon from '../assets/amazin.png'
import AppleBook from '../assets/applebook.jpg'
const BuildBusiness = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.box1}>
          <h2>BUILD A BUSINESS THAT FITS YOUR LIFE AND THRIVES</h2>
        </div>
        <div className={style.cardDiv}>
          <div className={style.card}>
            <div className={style.ideaInward}>
              <img src={Idea} />
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
              <img src={Idea} />
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
          {/* last card */}
            <div className={style.card}>
            <div className={style.ideaInward}>
              <img src={Idea} />
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
        </div>
         <div className={style.buttonDiv}>
            <button className={style.amazon}><img src={Amazon} width={30} />Buy on Amazon</button> <button className={style.apple}> <img src={AppleBook} width={30} />Buy on Apple</button>
          </div>
      </div>
    </>
  );
};

export default BuildBusiness;

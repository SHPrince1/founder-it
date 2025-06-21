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
              <img src={Idea} alt="" />
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
              <img src={Idea} alt=""/>
              <p className={style.look}>Looking Outward</p>
            </div>
            <div>
              <h6>VALIDATING BUSINESS IDEAS IN THE MARKET</h6>
            </div>
            <div className={style.uncover}>
              <p>
                Become a market detective-spot opportunities, study trends and uncover what customers truly want
              </p>
            </div>
          </div>
          {/* last card */}
            <div className={style.card}>
            <div className={style.ideaInward}>
              <img src={Idea} alt="" />
              <p className={style.look}>Narrowing and testing</p>
            </div>
            <div>
              <h6>Launch with confidence</h6>
            </div>
            <div className={style.uncover}>
              <p>
                Use a proven ranking  system and a 28 day plan to test and launch your best idea -like a pro
              </p>
            </div>
          </div>
        </div>
         <div className={style.buttonDiv}>
            <button className={style.amazon}><img src={Amazon} width={30} alt=""/>Buy on Amazon</button> <button className={style.apple}> <img src={AppleBook} alt='' width={30} />Buy on Apple</button>
          </div>
      </div>
    </>
  );
};

export default BuildBusiness;

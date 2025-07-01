import React from "react";
import style from "../styles/homepage-banner.module.css";
import Book from '../assets/book123.png'
import Amazon from '../assets/amazin.png'
import AppleBook from '../assets/applebook.jpg'
const HompageBanner = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.box1}>
          <div className={style.availableDiv}>
            <div className={style.dash}></div>
            <p>AVAILABLE FOR PRE-ORDER NOW</p>
          </div>
          <div className={style.ready}>
            <h2>READY TO TURN YOUR DREAM BUSINESS INTO REALITY?</h2>
            
          </div>
          <div className={style.discover}>
            <p>
              Discover, Validate and launch the perfect business idea with a
              proven step-by-step guide
            </p>
          </div>

          <div className={style.buttonDiv}>
            <button className={style.amazon}>
              
              <img src={Amazon} width={30} alt="" />
            
            
           <p>Buy on Amazon</p> 
            </button> <button className={style.apple}> <img src={AppleBook} width={30} alt="" />Buy on Apple Books</button>
          </div>
        </div>

        <div className={style.box2}>
            <img src={Book} alt="" />
        </div>
      </div>
    </>
  );
};

export default HompageBanner;

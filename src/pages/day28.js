import React from "react";
import CongratsBatch from "../assets/congratulations.svg";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import Google from "../assets/plus.png";
import Fb from "../assets/fb.png";
import Link from "../assets/linkdln.png";
// import FFlogo from "../assets/FFlogo.png";
import EditText from "../components/edittext";
import Footer from "../components/footer";
import style from "../styles/day28.module.css";
import TopNav from "../components/top-nav";
const Day28 = () => {
  return (
    <div className={style.container}>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY 28"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900}
      />
      <h2 className={style.congratH2}>
        Congratulations you are ready to conquer the world.
      </h2>
      <div className={style.congratDiv}>
        <img src={CongratsBatch} alt="" className={style.con} />

        <EditText message="Congratulations you are ready to conquer the world." />
        <div className={style.btnsDiv}>
          <div className={style.signUpWithBox2}>
            <div className={style.signUpWithBox2Buttton}>
              <button className={style.signUpWithBox2ButttonFb}>
                {" "}
                <img src={Fb} alt="" />
                Facebook
              </button>
              <button className={style.signUpWithBox2ButttonGg}>
                <img src={Google} alt="" />
                Whatsapp
              </button>
              <button className={style.signUpWithBox2Butttonld}>
                <img src={Link} alt="" /> Linkdin
              </button>
            </div>
          </div>
        </div>
        <a href="/">
          <button>BACK TO MAN PAGE</button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Day28;

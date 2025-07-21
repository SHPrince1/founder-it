import React from "react";
import TopNav from "../components/top-nav";
import QuestionWithOptions from "../components/questionwithoptions";
import TableTitle from "../components/day1/table-title";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import EditText from "../components/edittext";
import style from "../styles/day2.module.css";
import Footer from "../components/footer";
const Day2 = () => {
  return (
    <div>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY2"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900} // optional
      />
      <EditText message="Today you will define your selection criteria and carefully consider your personal and professional goals. To make informed decisions use your responses from Day 2 to guide you through this process. Define your selection criteria for an business below." />

      <div className={style.help}>
        <div className={style.emptyDiv}></div>
        <p>HELP</p>
        <div className={style.emptyDiv}></div>
      </div>

      <div className={style.btnDiv}>
        <button>Sample of a filled out form</button>
      </div>
      <TableTitle
        TableTitle
        subtitle="Table 3"
        title="Defining selection criteria"
      />
      <QuestionWithOptions />
      <Footer />
    </div>
  );
};

export default Day2;

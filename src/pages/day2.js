import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/top-nav";
import QuestionWithOptions from "../components/questionwithoptions";
import TableTitle from "../components/day1/table-title";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import EditText from "../components/edittext";
import style from "../styles/day2.module.css";
import Footer from "../components/footer";
import ButtonNextPre from "../components/button-next-pre";

const Day2 = () => {
  const navigate = useNavigate(); // <-- Initialize navigate here

  const handlePrev = () => navigate("/day1-part1");
  const handleNext = () => navigate("/day3-16");

  return (
    <div>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY2"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900}
      />
      <EditText
        message="Today you will define your selection criteria and carefully consider your personal and professional goals. To make informed decisions use your responses from Day 2 to guide you through this process. Define your selection criteria for a business below."
      />

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

      <div className={style.btnContainer}>
        <ButtonNextPre
          buttons={[
            { label: "PREVIOUS", onClick: handlePrev },
            { label: "NEXT", onClick: handleNext },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Day2;

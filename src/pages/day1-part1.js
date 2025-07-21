import React from "react";
import TableWithInput from "../components/day1/day1-component";
import PassionTable from "../components/day1/passion-table";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import style from "../styles/day1part1.module.css";
import TopNav from "../components/top-nav";
const Day1Part1 = () => {
  return (
    <div className={style.container}>
        <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY1-PART1"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900} // optional
      />

      <div className={style.textBox}>
        <h1>Welcome to your first day!</h1>
        <div className={style.textNumBox}>
          <div className={style.textNum}>
            <p className={style.num}>1</p>
            <p>
              Begin by identifying your skills, passions, interests using the
              table below.
            </p>
          </div>
          <div className={style.textNum}>
            <p className={style.num}>2</p>
            <p>
              Evaluate them using a 1-10 scale where "1" is the lowest score and
              "10" the highest
            </p>
          </div>
          <div className={style.textNum}>
            <p className={style.num}>3</p>
            <p>Submit the information once done.</p>
          </div>
        </div>
      </div>

      <div className={style.helpButtonDiv}>
        <div className={style.help}>
          <div className={style.emptyDiv}></div>
          <p>HELP</p>
          <div className={style.emptyDiv}></div>
        </div>
        <div className={style.helpButton}>
          <button className={style.BtnHelp}>Sample of a filled out form</button>
          <button className={style.BtnHelp}>
            Use an AI tool to help you get started
          </button>
        </div>
      </div>

      <div className={style.tableTitle}>
        <h5>Table 1</h5>
        <h1>Listing skills, passions and interests</h1>
      </div>
      <div className={style.TableContainer}>
        <TableWithInput />
        <PassionTable />
        <div className={style.BtnDiv}>
          <button className={style.BtnDivSave}>SAVE</button>
          <button className={style.BtnDivUbmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Day1Part1;

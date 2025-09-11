import React from "react";
import EvaluationTable from "../components/evaluation-table";
import TopNav from "../components/top-nav";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import style from "../styles/day3-16.module.css";
import style2 from "../styles/day26.module.css";
// import InstructionSteps from "../components/instruction-step";
import TableTitle from "../components/day1/table-title";
// import IdeaTableList from "../components/ideaslist-table";
import EditText from "../components/edittext";
import Footer from "../components/footer";
// import RankinkIdeaList from "../components/ranking-idea-table";
const Day26 = () => {
  return (
    <div>
      <div>
        <div>
          <TopNav />
          <TableBanner
            title="28-DAY CHALLENGE"
            description="DAY 26"
            image={Vid}
            imageAlt="Challenge Preview"
            imageWidth={900}
          />
          <h2 className={style2.header}>WELCOME TO YOUR FIRST DAY</h2>
          <EditText message="We will now bring everything you’ve done together to integrate your skills, passions, interests, and selection criteria to establish for “founder fit” with a business idea. We will evaluate your fit by having you enter on a scale of 1-10 on the elements below:" />

          <div className={style2.btnDiv}>
            <button>Sample of a filled out form</button>
          </div>
          <div className={style.helpButtonDiv}>
            <div className={style.help}>
              <div className={style.emptyDiv}></div>
              <p>HELP</p>
              <div className={style.emptyDiv}></div>
            </div>
            <div className={style.helpButton}>
              <button className={style.BtnHelp}>
                Sample of a filled out form
              </button>
              <button className={style.BtnHelp}>
                Use an AI tool to help you get started
              </button>
            </div>
          </div>

          <TableTitle
            subtitle="Table 6"
            title="Evaluation of ideas against skills, passions,interest and selection criteria"
          />
        </div>
      </div>
      <EvaluationTable />

      <div className={style2.btnsDivs}>
        <div>
         
          <button className={style2.back}>BACK</button>
        </div>
        <div className={style2.btns2}>
          <button  className={style2.save}>SAVE</button>
          <button  className={style2.submit}>SUBMIT</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Day26;

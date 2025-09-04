import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/top-nav";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import style from "../styles/day3-16.module.css";
import InstructionSteps from "../components/instruction-step";
import TableTitle from "../components/day1/table-title";
// import IdeaTableList from "../components/ideaslist-table";
import RankinkIdeaList from "../components/ranking-idea-table";
import Footer from "../components/footer";
import ButtonNextPre from "../components/button-next-pre";

const Day1725 = () => {
  const navigate = useNavigate();

  const handlePrev = () => navigate("/day3-16"); // 👈 Go back to previous page
  const handleNext = () => navigate("/day26"); // 👈 Go forward to next page

  return (
    <div>
      <div>
        <TopNav />
        <TableBanner
          title="28-DAY CHALLENGE"
          description="DAY 17-25"
          image={Vid}
          imageAlt="Challenge Preview"
          imageWidth={900}
        />

        <InstructionSteps
          title="Welcome to your first day!"
          step1="This step is crucial to validating your ideas by understanding actual customer needs through their feedback"
          step2="Based on this feedback can decide to"
          step3="Keep the idea and continue with it"
          step4="Replace the idea with another highly ranked on from your list"
          step5="Proceed with ONLY ONE idea that shows the most promise"
        />

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

        <TableTitle subtitle="Table 5" title="RANKING IDEAS" />

        {/* <IdeaTableList /> */}
        <RankinkIdeaList />

        {/* ✅ Added navigation buttons */}
        <div className={style.btnContainer}>
          <ButtonNextPre
            buttons={[
              { label: "PREVIOUS", onClick: handlePrev },
              { label: "NEXT", onClick: handleNext },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Day1725;

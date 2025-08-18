"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RankingSkills from "../components/day1/ranking-skills";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import TableTitle from "../components/day1/table-title";
import style2 from "../styles/day1part2.module.css";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";
import EditText from "../components/edittext";
import ButtonNextPre from "../components/button-next-pre";

const initialPassions = [
  { key: "1", sn: "1", activity: "Education", score: null },
  { key: "2", sn: "2", activity: "Climate Action", score: null },
  { key: "3", sn: "3", activity: "Entrepreneurship", score: null },
  { key: "4", sn: "4", activity: "Singing", score: null },
  { key: "5", sn: "5", activity: "Fashion", score: null },
  { key: "6", sn: "6", activity: "Dancing", score: null },
  { key: "7", sn: "7", activity: "Content Creating", score: null },
];

const Day1part2 = () => {
  const navigate = useNavigate();
  const [passions, setPassions] = useState(initialPassions);

  const handlePrev = () => navigate("/day1-part1");
  const handleNext = () => navigate("/day2");

  return (
    <div className={style2.container}>
      <TopNav />

      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY1-PART2"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900}
      />

      <div className={style2.rank}>
        <p>
          To rank your skills, passions, interests using the table below, we
          will automatically do it for you and you can sort them and adjust
          accordingly.
        </p>
      </div>

      <div className={style2.help}>
        <div className={style2.emptyDiv}></div>
        <div className={style2.emptyDiv}></div>
      </div>

      <div className={style2.edit}>
        <EditText
          message='You can edit the list by changing the numbers assigned to the
          attribute and clicking the "rank for me" button above'
        />
      </div>

      <TableTitle
        TableTitle
        subtitle="Table 2"
        title="Ranking skills, passions and interests"
      />

      <div className={style2.TableContainer}>
        <RankingSkills data={passions} onDataChange={setPassions} />
        <div className={style2.btnContainer}>
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

export default Day1part2;

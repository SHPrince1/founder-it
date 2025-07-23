import React from "react";
import RankingSkills from "../components/day1/ranking-skills";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import TableTitle from "../components/day1/table-title";
import style from "../styles/day1part1.module.css";
import style2 from "../styles/day1part2.module.css";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";
import EditText from "../components/edittext";
import ButtonNextPre from "../components/button-next-pre";
const day1Part2 = () => {
  return (
    <div className={style2.container}>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY1-PART2"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900} // optional
      />

      <div className={style2.rank}>
        <p>
          To rank your skills, passions, interests using the table below, we
          will automatically do it for you and you can sort them and adjust
          accordingly.
        </p>
      </div>
      <div className={style.help}>
        <div className={style.emptyDiv}></div>
        <p>HELP</p>
        <div className={style.emptyDiv}></div>
      </div>

      <div className={style2.edit}>
        <p>
          <EditText
            message=' You can edit the list by changing the numbers assigned to the
          attribute and clicking the "rank for me" button above'
          />
        </p>
      </div>
      <TableTitle
        TableTitle
        subtitle="Table 2"
        title="Ranking skills, passions and interests"
      />
      <div className={style2.TableContainer}>
        <RankingSkills />

        <div className={style.btnContainer}>
          <ButtonNextPre />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default day1Part2;

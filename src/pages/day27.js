import React from "react";
import TopNav from "../components/top-nav";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import EditText from "../components/edittext";
import style from "../styles/day27.module.css";
// import style2 from "../styles/banner.module.css";
import TableTitle from "../components/day1/table-title";
import AccessmentTable from "../components/accessment-table";
import Footer from "../components/footer";
const Day27 = () => {
  return (
    <div>
      <TopNav />

      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY 27"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900}
      />

      <h2 className={style.welH2}>WELCOME TO YOUR FIRST DAY</h2>
      <EditText message="Congratulations on making it to this final stage of your founder fit: analyzing the financials. The top idea you have is now ready for a quick financial assessment. This will help you determine your business’ potential." />

      <div className={style.btnDiv}>
        <button>Sample of a filled out form</button>
      </div>
      <div className={style.helpButtonDiv}>
        <div className={style.help}>
          <div className={style.emptyDiv}></div>
          <p>HELP</p>
          <div className={style.emptyDiv}></div>
        </div>
      </div>

      <TableTitle
        subtitle="Table 7"
        title="Simple financial assessment of business"
      />

      <AccessmentTable />
      <Footer />
    </div>
  );
};

export default Day27;

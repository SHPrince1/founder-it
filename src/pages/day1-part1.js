import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhatIamGreatAtTable from "../components/day1/day1-component";
import PassionTable from "../components/day1/passion-table";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import style from "../styles/day1part1.module.css";
import TopNav from "../components/top-nav";
import ButtonNextPre from "../components/button-next-pre";
import Footer from "../components/footer";
import { message } from "antd";

const initialSkills = [
  { key: "1", sn: "1", activity: "", score: null },
  { key: "2", sn: "2", activity: "", score: null },
  { key: "3", sn: "3", activity: "", score: null },
  { key: "4", sn: "4", activity: "", score: null },
  { key: "5", sn: "5", activity: "", score: null },
  { key: "6", sn: "6", activity: "", score: null },
];

const initialPassions = [
  { key: "1", sn: "1", activity: "", score: null },
  { key: "2", sn: "2", activity: "", score: null },
  { key: "3", sn: "3", activity: "", score: null },
  { key: "4", sn: "4", activity: "", score: null },
  { key: "5", sn: "5", activity: "", score: null },
  { key: "6", sn: "6", activity: "", score: null },
  // { key: "7", sn: "7", activity: "", score: null },
];

const Day1Part1 = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(initialSkills);
  const [passions, setPassions] = useState(initialPassions);
  const [loading, setLoading] = useState(false);

  const getPayload = () => {
    const userId = localStorage.getItem("user_id");
    return {
      user_id: Number(userId),
      skills: skills.map((s) => ({ skill: s.activity, score: s.score })),
      passions: passions.map((p) => ({ passion: p.activity, score: p.score })),
    };
  };

  const handleSave = async () => {
    const allFilled = [...skills, ...passions].every((i) => i.activity && i.score);
    if (!allFilled) {
      message.warning("Please fill in all fields before saving.");
      return;
    }

    const userId = localStorage.getItem("user_id");
    if (!userId) {
      message.error("User not found. Please login again.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://founderfit-backend.onrender.com/api/form/submit-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(getPayload()),
        }
      );
      if (!res.ok) throw new Error("Unable to save");
      message.success("Data saved successfully!");
    } catch (err) {
      console.error(err);
      message.error("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    navigate("/activityindex"); // previous page
  };

  const handleNext = () => {
    navigate("/day1-part2"); // next page
  };

  return (
    <div className={style.container}>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY1-PART1"
        image={Vid}
        imageAlt="Challenge Preview"
      />

      <div className={style.TableContainer}>
        <WhatIamGreatAtTable dataSource={skills} onDataChange={setSkills} />
        <PassionTable dataSource={passions} onDataChange={setPassions} />

        <div className={style.BtnDiv2}>
          <button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "SAVE"}
          </button>
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

export default Day1Part1;

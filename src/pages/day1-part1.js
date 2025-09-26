"use client";
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
  { key: "7", sn: "7", activity: "", score: null },
];

const Day1Part1 = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(initialSkills);
  const [passions, setPassions] = useState(initialPassions);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    // 🔍 Check for incomplete rows
    const incompleteSkill = skills.find(
      (s) =>
        (s.activity.trim() !== "" && (s.score === null || s.score === undefined)) ||
        (s.activity.trim() === "" && s.score !== null)
    );
    const incompletePassion = passions.find(
      (p) =>
        (p.activity.trim() !== "" && (p.score === null || p.score === undefined)) ||
        (p.activity.trim() === "" && p.score !== null)
    );

    if (incompleteSkill || incompletePassion) {
      message.error("⚠ Each skill/passion must have BOTH a description and a score.");
      return;
    }

    //  Build payload only from fully valid rows
    const filteredSkills = skills
      .filter((s) => s.activity.trim() !== "" && s.score !== null)
      .map((s) => ({ description: s.activity, score: s.score }));

    const filteredPassions = passions
      .filter((p) => p.activity.trim() !== "" && p.score !== null)
      .map((p) => ({ description: p.activity, score: p.score }));

    if (filteredSkills.length === 0 && filteredPassions.length === 0) {
      message.warning("⚠ Please enter at least one skill or passion.");
      return;
    }

    const payload = { skills: filteredSkills, passions: filteredPassions };
    console.log("Payload:", payload);

    setLoading(true);
    try {
      const res = await fetch("https://backend.thefounderfit.com:26918/api/day1/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Fixed here
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        message.error(result.error || "Error saving data");
        return;
      }

      message.success("Your skills and passions have been saved. Click ‘Next’ to continue.");
    } catch (err) {
      console.error(err);
      message.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => navigate("/activityindex");
  const handleNext = () => navigate("/day1-part2");

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

// pages/Day2.js
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, message } from "antd";
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
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const questionRef = useRef();

  const handlePrev = () => navigate("/day1-part1");

  const handleNext = async () => {
    // Validate form and build payload
    const payload = questionRef.current?.validateAndBuildPayload();
    if (!payload) {
      message.warning("Please complete the form before proceeding.");
      return;
    }

    // Re-map keys to match backend API fields
    const backendPayload = {
      selection_criteria: payload.selectionCriteria,
      location: payload.location,
      scalability: payload.scalability,
      risk_tolerance: payload.riskTolerance,
      time_commitment: payload.timeCommitment,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        message.error("You are not logged in. Please log in first.");
        return;
      }

      const response = await fetch(
        "https://founderfit-backend.onrender.com/api/day2/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, //  fixed template string
          },
          body: JSON.stringify(backendPayload),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      message.success("Responses saved successfully!");
      navigate("/day3-16");
    } catch (err) {
      console.error(" Failed to save Day2 responses:", err);
      message.error("Failed to save your responses. Try again.");
    }
  };

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

      {/* Help Section */}
      <div className={style.help}>
        <div className={style.emptyDiv}></div>
        <p>HELP</p>
        <div className={style.emptyDiv}></div>
      </div>

      {/* Modal Trigger */}
      <div className={style.btnDiv}>
        <button onClick={() => setIsModalOpen(true)}>
          Sample of a filled out form
        </button>
      </div>

      {/* Modal (Popup) */}
      <Modal
        title="Sample of a Filled Out Form"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        okText="Close"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>This is an example of how the form should be filled.</p>
      </Modal>

      {/* Table Title */}
      <TableTitle subtitle="Table 3" title="Defining selection criteria" />

      {/*  Pass ref so we can validate on Next */}
      <QuestionWithOptions ref={questionRef} />

      {/* Navigation Buttons */}
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

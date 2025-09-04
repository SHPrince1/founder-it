import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import TopNav from "../components/top-nav";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import Filled from "../assets/filled sample.jpeg";
import style from "../styles/day3-16.module.css";
import InstructionSteps from "../components/instruction-step";
import TableTitle from "../components/day1/table-title";
import IdeaTableList from "../components/ideaslist-table";
import Footer from "../components/footer";

// ✅ Example extra components shown inside popups
const SampleForm = () => (
  <div>
    <h3>Sample Filled Form</h3>
    <p>This is how a filled-out idea form might look:</p>
    <img
      src={Filled}
      alt="Sample Filled Form"
      style={{ width: "100%", maxWidth: "600px" }}
    />
  </div>
);

const AIToolTip = () => (
  <div>
    <h3>AI Tool Tip</h3>
    <p>
      Hello. I'm trying to figure out the top traits or things I am good at. Can
      you take a look at my resume/CV attached and let me know? OR, can you take
      a look at my LinkedIn profile and let me know?
      <br />
      - https://www.linkedin.com/in/...[enter your LinkedIn URL]
    </p>
    <a
      href="https://www.perplexity.ai/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "blue", textDecoration: "underline" }}
    >
      Use AI
    </a>
  </div>
);

const Day316 = () => {
  const navigate = useNavigate();
  const ideaTableRef = useRef();
  const [popupContent, setPopupContent] = useState(null);

  const handlePrev = () => navigate("/day2");

  const handleNext = async () => {
    const payload = ideaTableRef.current?.validateAndBuildPayload();
    if (!payload) return; // validation failed

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://founderfit-backend.onrender.com/api/day3/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error(`Server responded with ${response.status}`);

      message.success("Day3–16 responses saved successfully!");
      navigate("/day17-25");
    } catch (err) {
      console.error("❌ Failed to save Day3–16 responses:", err);
      message.error("Failed to save your responses. Try again.");
    }
  };

  const openPopup = (content) => setPopupContent(content);
  const closePopup = () => setPopupContent(null);

  return (
    <div>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY 3-16"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900}
      />

      <InstructionSteps
        title="Welcome to your first day!"
        step1="This is a multi-day exercise where you are actively looking for potential business ideas. Identify the problems you identify and detail the solution you propose."
        step2="Developing and refining your ideas will take time so DON’T rush things; allow yourself ample time for this process."
        step3='Following the ideation process, assign a number to the interest you have in pursuing this idea; where "1" is "least interested" and "10" is "most interested".'
      />

      {/* ✅ HELP Section with Popups */}
      <div className={style.helpButtonDiv}>
        <div className={style.help}>
          <div className={style.emptyDiv}></div>
          <p>HELP</p>
          <div className={style.emptyDiv}></div>
        </div>

        <div className={style.helpButton}>
          <button
            className={style.BtnHelp}
            onClick={() => openPopup(<SampleForm />)}
          >
            Sample of a filled out form
          </button>
          <button
            className={style.BtnHelp}
            onClick={() => openPopup(<AIToolTip />)}
          >
            Use an AI tool to help you get started
          </button>
        </div>
      </div>

      <TableTitle subtitle="Table 4" title="LISTING IDEAS AND EVALUATION" />

      {/* ✅ Forward ref for payload validation */}
      <IdeaTableList ref={ideaTableRef} onPrev={handlePrev} onNext={handleNext} />

      <Footer />

      {/* ✅ Popup Modal */}
      {popupContent && (
        <div className={style.popupOverlay}>
          <div className={style.popupBox}>
            {popupContent}
            <button className={style.BtnHelp} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Day316;

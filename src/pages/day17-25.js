import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import TopNav from "../components/top-nav";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import style from "../styles/day3-16.module.css";
import InstructionSteps from "../components/instruction-step";
import TableTitle from "../components/day1/table-title";
import RankinkIdeaList from "../components/ranking-idea-table";
import Footer from "../components/footer";

const Day1725 = () => {
  const navigate = useNavigate();
  const ideaTableRef = useRef();
  const [popupContent, setPopupContent] = useState(null);

  // ✅ Navigation
  const handlePrev = () => navigate("/day3-16");

  // ✅ API call for NEXT
  const handleNext = async () => {
    const payload = ideaTableRef.current?.validateAndBuildPayload();
    if (!payload) return; // validation failed

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://founderfit-backend.onrender.com/api/day17/save",
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

      message.success("Day17–25 responses saved successfully!");
      navigate("/day26");
    } catch (err) {
      console.error("❌ Failed to save Day17–25 responses:", err);
      message.error("Failed to save your responses. Try again.");
    }
  };

  // ✅ Popup handling
  const openPopup = (content) => setPopupContent(content);
  const closePopup = () => setPopupContent(null);

  return (
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
        step2="Based on this feedback you can decide to"
        step3="Keep the idea and continue with it"
        step4="Replace the idea with another highly ranked one from your list"
        step5="Proceed with ONLY ONE idea that shows the most promise"
      />

      {/* ✅ HELP Section */}
      <div className={style.helpButtonDiv}>
        <div className={style.help}>
          <div className={style.emptyDiv}></div>
          <p>HELP</p>
          <div className={style.emptyDiv}></div>
        </div>
        <div className={style.helpButton}>
          <button
            className={style.BtnHelp}
            onClick={() =>
              openPopup(
                <div>
                  <h3>Sample Filled Form</h3>
                  <p>This is how a filled-out ranking table might look.</p>
                </div>
              )
            }
          >
            Sample of a filled out form
          </button>
          <button
            className={style.BtnHelp}
            onClick={() =>
              openPopup(
                <div>
                  <h3>AI Tool Tip</h3>
                  <p>
                    You can ask AI tools to help you evaluate and rank your
                    ideas. For example, provide your list of ideas and ask which
                    one aligns most with customer demand.
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
              )
            }
          >
            Use an AI tool to help you get started
          </button>
        </div>
      </div>

      <TableTitle subtitle="Table 5" title="RANKING IDEAS" />

      {/* ✅ Forward ref so parent can validate/save */}
      <RankinkIdeaList ref={ideaTableRef} onPrev={handlePrev} onNext={handleNext} />

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

export default Day1725;

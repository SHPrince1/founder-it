import React, { useState } from "react";
import TopNav from "../components/top-nav";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import style from "../styles/day3-16.module.css";
import InstructionSteps from "../components/instruction-step";
import TableTitle from "../components/day1/table-title";
import IdeaTableList from "../components/ideaslist-table";
import Footer from "../components/footer";

// Example extra components that can be shown inside popups
const SampleForm = () => (
  <div>
    <h3>📄 Sample Filled Form</h3>
    <p>This is how a filled-out idea form might look:</p>
    <ul>
      <li><strong>Problem:</strong> Long waiting times at banks</li>
      <li><strong>Solution:</strong> Mobile queue management app</li>
      <li><strong>Interest Level:</strong> 8/10</li>
    </ul>
  </div>
);

const AIToolTip = () => (
  <div>
    <h3>AI Tool Tip</h3>
    <p>You can use ChatGPT or other AI brainstorming tools to quickly generate business ideas.</p>
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
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

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
        step2="Developing and refining your ideas will take time so DON’T rush things; allow yourself ample time for this process"
        step3="Following the ideation process, assign a number to the interest you have in pursuing this idea; where “1” is “least interested” and “10” is “most interested”"
      />

      <div className={style.helpButtonDiv}>
        <div className={style.help}>
          <div className={style.emptyDiv}></div>
          <p>HELP</p>
          <div className={style.emptyDiv}></div>
        </div>

        {/* Buttons that trigger popups */}
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

      <TableTitle subtitle="Table 4" title="LISTING IDEAS AND EVAULATION" />

      <IdeaTableList />

      <Footer />

      {/* Popup Modal */}
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

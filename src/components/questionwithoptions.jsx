import React, { useState } from "react";
import { Checkbox, Input } from "antd";
import style from "../styles/questionwithoption.module.css";

const QuestionWithOptions = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [customOther, setCustomOther] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    criteria: "",
    location: "",
    scalability: "",
    risk: "",
    commitment: "",
    investment: "",
  });

  // ✅ Section 1: Max 2 selections
  const handleCheckboxChange = (values) => {
    if (values.length > 2) {
      setErrorMessages((prev) => ({
        ...prev,
        criteria: "You can only pick up to 2 options here.",
      }));
      return;
    }
    setErrorMessages((prev) => ({ ...prev, criteria: "" }));
    setSelectedValues(values);

    if (!values.includes("Other")) {
      setCustomOther(""); // Clear input when 'Other' is unchecked
    }
  };

  const handleOtherInputChange = (e) => {
    setCustomOther(e.target.value);
  };

  // ✅ Generic handler for single-choice groups
  const handleSingleSelectChange = (values, key, setFn) => {
    if (values.length > 1) {
      setErrorMessages((prev) => ({
        ...prev,
        [key]: "You can only select one option.",
      }));
      return;
    }
    setErrorMessages((prev) => ({ ...prev, [key]: "" }));
    setFn(values);
  };

  // States for each single-choice section
  const [location, setLocation] = useState([]);
  const [scalability, setScalability] = useState([]);
  const [risk, setRisk] = useState([]);
  const [commitment, setCommitment] = useState([]);
  const [investment, setInvestment] = useState([]);

  return (
    <div className={style.container}>
      {/* ✅ Section 1: With "Other" + Input (max 2) */}
      <div className={style.checkBoxText}>
        <h3>Defining Your Selection Criteria – What do you want?</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={handleCheckboxChange}
            value={selectedValues}
          >
            <div className={style.blockCheck}>
              <Checkbox value="Freedom / Flexibility">Freedom / Flexibility</Checkbox>
              <Checkbox value="Wealth">Wealth</Checkbox>
              <Checkbox value="Impact">Impact</Checkbox>
              <Checkbox value="Self Actualization">Self Actualization</Checkbox>
              <Checkbox value="Other">Other</Checkbox>

              {selectedValues.includes("Other") && (
                <Input
                  placeholder="Please specify..."
                  value={customOther}
                  onChange={handleOtherInputChange}
                  className={style.otherInput}
                />
              )}
            </div>
          </Checkbox.Group>
          {errorMessages.criteria && (
            <p className={style.error}>{errorMessages.criteria}</p>
          )}
        </div>
      </div>

      {/* ✅ Section 2 */}
      <div className={style.checkBoxText}>
        <h3>The location of the business</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(values) =>
              handleSingleSelectChange(values, "location", setLocation)
            }
            value={location}
          >
            <div className={style.blockCheck}>
              <Checkbox value="A">No location</Checkbox>
              <Checkbox value="B">In the Area (permanence not required)</Checkbox>
              <Checkbox value="C">Fixed Location</Checkbox>
            </div>
          </Checkbox.Group>
          {errorMessages.location && (
            <p className={style.error}>{errorMessages.location}</p>
          )}
        </div>
      </div>

      {/* ✅ Section 3 */}
      <div className={style.checkBoxText}>
        <h3>Scalability requirement is</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(values) =>
              handleSingleSelectChange(values, "scalability", setScalability)
            }
            value={scalability}
          >
            <div className={style.blockCheck}>
              <Checkbox value="A">Supporting my lifestyle</Checkbox>
              <Checkbox value="B">Stable cash flow; some growth</Checkbox>
              <Checkbox value="C">High Growth</Checkbox>
            </div>
          </Checkbox.Group>
          {errorMessages.scalability && (
            <p className={style.error}>{errorMessages.scalability}</p>
          )}
        </div>
      </div>

      {/* ✅ Section 4 */}
      <div className={style.checkBoxText}>
        <h3>Risk tolerance is</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(values) =>
              handleSingleSelectChange(values, "risk", setRisk)
            }
            value={risk}
          >
            <div className={style.blockCheck}>
              <Checkbox value="A">Low</Checkbox>
              <Checkbox value="B">Medium</Checkbox>
              <Checkbox value="C">High</Checkbox>
            </div>
          </Checkbox.Group>
          {errorMessages.risk && (
            <p className={style.error}>{errorMessages.risk}</p>
          )}
        </div>
      </div>

      {/* ✅ Section 5 */}
      <div className={style.checkBoxText}>
        <h3>Required time commitment</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(values) =>
              handleSingleSelectChange(values, "commitment", setCommitment)
            }
            value={commitment}
          >
            <div className={style.blockCheck}>
              <Checkbox value="A">Full time</Checkbox>
              <Checkbox value="B">Part time</Checkbox>
              <Checkbox value="C">Evening/weekends</Checkbox>
              <Checkbox value="D">Adhoc</Checkbox>
            </div>
          </Checkbox.Group>
          {errorMessages.commitment && (
            <p className={style.error}>{errorMessages.commitment}</p>
          )}
        </div>
      </div>

      {/* ✅ Section 6 */}
      <div className={style.checkBoxText}>
        <h3>Money to be invested</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(values) =>
              handleSingleSelectChange(values, "investment", setInvestment)
            }
            value={investment}
          >
            <div className={style.blockCheck}>
              <Checkbox value="A">No money</Checkbox>
              <Checkbox value="B">Some money</Checkbox>
              <Checkbox value="C">Other people's money</Checkbox>
              <Checkbox value="D">Self-funded</Checkbox>
            </div>
          </Checkbox.Group>
          {errorMessages.investment && (
            <p className={style.error}>{errorMessages.investment}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionWithOptions;

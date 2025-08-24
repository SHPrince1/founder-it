import React, { useState, useEffect } from "react";
import { Checkbox, Input } from "antd";
import style from "../styles/questionwithoption.module.css";

const QuestionWithOptions = () => {
  // 🔹 Load saved state from localStorage (if available)
  const loadState = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // Section 1
  const [selectedValues, setSelectedValues] = useState(
    () => loadState("criteria", [])
  );
  const [customOther, setCustomOther] = useState(
    () => loadState("customOther", "")
  );
  const [errorMessages, setErrorMessages] = useState({});

  // Section states (single choice each)
  const [location, setLocation] = useState(() => loadState("location", ""));
  const [scalability, setScalability] = useState(() =>
    loadState("scalability", "")
  );
  const [risk, setRisk] = useState(() => loadState("risk", ""));
  const [commitment, setCommitment] = useState(() =>
    loadState("commitment", "")
  );
  const [investment, setInvestment] = useState(() =>
    loadState("investment", "")
  );

  // 🔹 Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("criteria", JSON.stringify(selectedValues));
    localStorage.setItem("customOther", JSON.stringify(customOther));
    localStorage.setItem("location", JSON.stringify(location));
    localStorage.setItem("scalability", JSON.stringify(scalability));
    localStorage.setItem("risk", JSON.stringify(risk));
    localStorage.setItem("commitment", JSON.stringify(commitment));
    localStorage.setItem("investment", JSON.stringify(investment));
  }, [
    selectedValues,
    customOther,
    location,
    scalability,
    risk,
    commitment,
    investment,
  ]);

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

    // reset Other input if unchecked
    if (!values.includes("Other")) {
      setCustomOther("");
    }
  };

  const handleOtherInputChange = (e) => {
    setCustomOther(e.target.value);
  };

  // ✅ Generic handler for single-choice groups
  const handleSingleSelectChange = (value, key, setFn) => {
    setFn(value);
    setErrorMessages((prev) => ({ ...prev, [key]: "" }));
  };

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
            value={[location]}
            onChange={(vals) =>
              handleSingleSelectChange(vals[0] || "", "location", setLocation)
            }
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
            value={[scalability]}
            onChange={(vals) =>
              handleSingleSelectChange(vals[0] || "", "scalability", setScalability)
            }
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
            value={[risk]}
            onChange={(vals) =>
              handleSingleSelectChange(vals[0] || "", "risk", setRisk)
            }
          >
            <div className={style.blockCheck}>
              <Checkbox value="A">Low</Checkbox>
              <Checkbox value="B">Medium</Checkbox>
              <Checkbox value="C">High</Checkbox>
            </div>
          </Checkbox.Group>
          {errorMessages.risk && <p className={style.error}>{errorMessages.risk}</p>}
        </div>
      </div>

      {/* ✅ Section 5 */}
      <div className={style.checkBoxText}>
        <h3>Required time commitment</h3>
        <div className={style.questBox}>
          <Checkbox.Group
            value={[commitment]}
            onChange={(vals) =>
              handleSingleSelectChange(vals[0] || "", "commitment", setCommitment)
            }
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
            value={[investment]}
            onChange={(vals) =>
              handleSingleSelectChange(vals[0] || "", "investment", setInvestment)
            }
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

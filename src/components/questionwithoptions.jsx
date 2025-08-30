// components/questionwithoptions.js
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Checkbox, Input, message } from "antd";
import style from "../styles/questionwithoption.module.css";

const QuestionWithOptions = forwardRef((props, ref) => {
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
      message.error("You can only pick up to 2 options here.");
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

  // ✅ Expose validation + payload to parent
  useImperativeHandle(ref, () => ({
    validateAndBuildPayload() {
      if (selectedValues.length !== 2) {
        message.error("Please select exactly 2 options in 'Selection Criteria'.");
        return null;
      }
      if (!location) {
        message.error("Please select one option in 'Location'.");
        return null;
      }
      if (!scalability) {
        message.error("Please select one option in 'Scalability'.");
        return null;
      }
      if (!risk) {
        message.error("Please select one option in 'Risk Tolerance'.");
        return null;
      }
      if (!commitment) {
        message.error("Please select one option in 'Time Commitment'.");
        return null;
      }
      if (!investment) {
        message.error("Please select one option in 'Investment'.");
        return null;
      }

      return {
        selectionCriteria: selectedValues.includes("Other")
          ? [...selectedValues.filter((v) => v !== "Other"), customOther]
          : selectedValues,
        location,
        scalability,
        riskTolerance: risk,
        timeCommitment: commitment,
        investment,
      };
    },
  }));

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
              <Checkbox value="No location">No location</Checkbox>
              <Checkbox value="In the Area">In the Area (permanence not required)</Checkbox>
              <Checkbox value="Fixed Location">Fixed Location</Checkbox>
            </div>
          </Checkbox.Group>
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
              <Checkbox value="Lifestyle">Supporting my lifestyle</Checkbox>
              <Checkbox value="Stable Growth">Stable cash flow; some growth</Checkbox>
              <Checkbox value="High Growth">High Growth</Checkbox>
            </div>
          </Checkbox.Group>
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
              <Checkbox value="Low">Low</Checkbox>
              <Checkbox value="Medium">Medium</Checkbox>
              <Checkbox value="High">High</Checkbox>
            </div>
          </Checkbox.Group>
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
              <Checkbox value="Full time">Full time</Checkbox>
              <Checkbox value="Part time">Part time</Checkbox>
              <Checkbox value="Evenings/Weekends">Evening/weekends</Checkbox>
              <Checkbox value="Adhoc">Adhoc</Checkbox>
            </div>
          </Checkbox.Group>
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
              <Checkbox value="No money">No money</Checkbox>
              <Checkbox value="Some money">Some money</Checkbox>
              <Checkbox value="Other people's money">Other people's money</Checkbox>
              <Checkbox value="Self-funded">Self-funded</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
});

export default QuestionWithOptions;

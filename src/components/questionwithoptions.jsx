import React, { useState } from "react";
import { Checkbox, Input } from "antd";
import style from "../styles/questionwithoption.module.css";

const QuestionWithOptions = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [customOther, setCustomOther] = useState("");

  const handleCheckboxChange = (values) => {
    setSelectedValues(values);
    if (!values.includes("Other")) {
      setCustomOther(""); // Clear input when 'Other' is unchecked
    }
  };

  const handleOtherInputChange = (e) => {
    setCustomOther(e.target.value);
  };

  return (
    <div className={style.container}>
      {/* ✅ Section 1: With "Other" + Input */}
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
        </div>
      </div>

      {/* ✅ Section 2: Normal */}
      <div className={style.checkBoxText}>
        <h3>The location of the business</h3>
        <div className={style.questBox}>
          <Checkbox.Group style={{ width: "100%" }}>
            <div className={style.blockCheck}>
              <Checkbox value="A">No location</Checkbox>
              <Checkbox value="B">In the Area (permanence not required)</Checkbox>
              <Checkbox value="C">Fixed Location</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
      </div>

      {/* ✅ Section 3: Normal */}
      <div className={style.checkBoxText}>
        <h3>Scalability requirement is</h3>
        <div className={style.questBox}>
          <Checkbox.Group style={{ width: "100%" }}>
            <div className={style.blockCheck}>
              <Checkbox value="A">Supporting my lifestyle</Checkbox>
              <Checkbox value="B">Stable cash flow; some growth</Checkbox>
              <Checkbox value="C">High Growth</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
      </div>

      {/* ✅ Section 4: Normal */}
      <div className={style.checkBoxText}>
        <h3>Risk tolerance is</h3>
        <div className={style.questBox}>
          <Checkbox.Group style={{ width: "100%" }}>
            <div className={style.blockCheck}>
              <Checkbox value="A">Low</Checkbox>
              <Checkbox value="B">Medium</Checkbox>
              <Checkbox value="C">High</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
      </div>

      {/* ✅ Section 5: Normal */}
      <div className={style.checkBoxText}>
        <h3>Required time commitment</h3>
        <div className={style.questBox}>
          <Checkbox.Group style={{ width: "100%" }}>
            <div className={style.blockCheck}>
              <Checkbox value="A">Full time</Checkbox>
              <Checkbox value="B">Part time</Checkbox>
              <Checkbox value="C">Evening/weekends</Checkbox>
              <Checkbox value="D">Adhoc</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
      </div>

      {/* ✅ Section 6: Normal */}
      <div className={style.checkBoxText}>
        <h3>Money to be invested</h3>
        <div className={style.questBox}>
          <Checkbox.Group style={{ width: "100%" }}>
            <div className={style.blockCheck}>
              <Checkbox value="A">No money</Checkbox>
              <Checkbox value="B">Some money</Checkbox>
              <Checkbox value="C">Other people's money</Checkbox>
              <Checkbox value="D">Self-funded</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
};

export default QuestionWithOptions;

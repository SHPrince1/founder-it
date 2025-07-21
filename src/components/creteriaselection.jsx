import { Checkbox } from "antd";
import style from "../../styles/selectionCriteria.module.css";

const SelectionCriteria = ({ onChange }) => {
  return (
    <div className={style.checkBoxText}>
      <div>
        <h3>Defining Your Selection Criteria: What do you want?</h3>
      </div>
      <div className={style.questBox}>
        <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
          <div className={style.blockCheck}>
            <Checkbox value="A">Freedom / Flexibility</Checkbox>
            <Checkbox value="B">Wealth</Checkbox>
            <Checkbox value="C">Impact</Checkbox>
            <Checkbox value="D">Self Actualization</Checkbox>
            <Checkbox value="E">Other</Checkbox>
          </div>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default SelectionCriteria;

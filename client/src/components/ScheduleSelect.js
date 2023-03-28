import Select from "react-select";
import { useState } from "react";
import {
  validateLunch,
  validateMorning,
  validateAfternoon,
} from "../helper/validator";

const ScheduleSelect = ({
  totalShiftsDaily,
  totalShiftsWeekly,
  options,
  index,
  header,
  colName,
  workSchedule,
  setSchedule,
  setDailyState,
  setWeeklyState,
}) => {
  // State to hold the selected option of the dropdown lost
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle the change of the dropdown list and store the selected option in the state
  const handleSelectChange = (selectedOption, rowId, header, colName) => {
    console.log(workSchedule);
    let checkMorning = true;
    let checkAfternoon = true;
    let checkLunch = true;
    if (
      colName === "Lunch A" ||
      colName === "Lunch B" ||
      colName === "Lunch C" ||
      colName === "Lunch D"
    ) {
      checkLunch = validateLunch(workSchedule, selectedOption, colName, rowId);
    }
    if (
      colName === "Morning Up Stairs" ||
      colName === "Morning Down Stairs" ||
      colName === "Morning Parking Lot"
    ) {
      checkMorning = validateMorning(
        workSchedule,
        selectedOption,
        colName,
        rowId
      );
    }
    if (
      colName === "Afternoon Up Stairs" ||
      colName === "Afternoon Down Stairs" ||
      colName === "Afternoon Parking Lot"
    ) {
      checkAfternoon = validateAfternoon(
        workSchedule,
        selectedOption,
        colName,
        rowId
      );
    }
    if (checkMorning && checkAfternoon && checkLunch) {
      const newObj = { ...workSchedule };
      newObj[colName].staff[rowId - 1] = selectedOption.value;
      if (
        totalShiftsDaily[selectedOption.value][rowId - 1] < 2 &&
        (colName !== "Lunch A" ||
          colName !== "Lunch B" ||
          colName !== "Lunch C" ||
          colName !== "Lunch D")
      ) {
        const newDailyShifts = { ...totalShiftsDaily };
        newDailyShifts[selectedOption.value][rowId - 1] += 1;
        setDailyState(newDailyShifts);
      } else {
        alert("This person has already worked 2 shifts today");
        return;
      }
      if (
        totalShiftsWeekly[selectedOption.value] < 7 &&
        (colName !== "Lunch A" ||
          colName !== "Lunch B" ||
          colName !== "Lunch C" ||
          colName !== "Lunch D")
      ) {
        const newWeeklyShifts = { ...totalShiftsWeekly };
        newWeeklyShifts[selectedOption.value] += 1;
        setWeeklyState(newWeeklyShifts);
      } else {
        alert("This person has already worked 7 shifts this week");
        return;
      }
      setSchedule(newObj);
      setSelectedOption(selectedOption);
      localStorage.setItem("schedule", JSON.stringify(newObj));
    }
  };

  return (
    <div>
      <Select
        options={options}
        value={
          workSchedule[colName].staff[index - 1] !== ""
            ? {
                value: workSchedule[colName].staff[index - 1],
                label: workSchedule[colName].staff[index - 1],
              }
            : selectedOption
        }
        onChange={(selectedOption) =>
          handleSelectChange(selectedOption, index, header, colName)
        }
      />
    </div>
  );
};

export default ScheduleSelect;

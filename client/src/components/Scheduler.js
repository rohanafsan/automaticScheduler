import React from "react";
import ScheduleSelect from "./ScheduleSelect";
import { useState } from "react";

const options = [
  { value: "None", label: "None" },
  { value: "X1", label: "X1" },
  { value: "X2", label: "X2" },
  { value: "X3", label: "X3" },
  { value: "X4", label: "X4" },
  { value: "X5", label: "X5" },
  { value: "X6", label: "X6" },
  { value: "X7", label: "X7" },
];

const headers = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const columns = [
  "Morning Up Stairs",
  "Morning Down Stairs",
  "Morning Parking Lot",
  "Lunch A",
  "Lunch B",
  "Lunch C",
  "Lunch D",
  "Afternoon Up Stairs",
  "Afternoon Down Stairs",
  "Afternoon Parking Lot",
];
const staffMemberHeaders = [
  "Staff Member",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Totals",
];

const schedule = {
  "Morning Up Stairs": {
    staff: ["", "", "", "", ""],
  },
  "Morning Down Stairs": {
    staff: ["", "", "", "", ""],
  },
  "Morning Parking Lot": {
    staff: ["", "", "", "", ""],
  },
  "Lunch A": {
    staff: ["", "", "", "", ""],
  },
  "Lunch B": {
    staff: ["", "", "", "", ""],
  },
  "Lunch C": {
    staff: ["", "", "", "", ""],
  },
  "Lunch D": {
    staff: ["", "", "", "", ""],
  },
  "Afternoon Up Stairs": {
    staff: ["", "", "", "", ""],
  },
  "Afternoon Down Stairs": {
    staff: ["", "", "", "", ""],
  },
  "Afternoon Parking Lot": {
    staff: ["", "", "", "", ""],
  },
};

const totalShiftsDaily = {
  X1: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  X2: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  X3: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  X4: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  X5: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  X6: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  X7: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
};

const totalShiftsWeekly = {
  X1: 0,
  X2: 0,
  X3: 0,
  X4: 0,
  X5: 0,
  X6: 0,
  X7: 0,
};

const Scheduler = () => {
  // Scheduler compont will hold all the state for the schedule
  const [dailyState, setDailyState] = useState(
    localStorage.getItem("dailyState")
      ? JSON.parse(localStorage.getItem("dailyState"))
      : totalShiftsDaily
  );
  const [weeklyState, setWeeklyState] = useState(
    localStorage.getItem("weeklyState")
      ? JSON.parse(localStorage.getItem("weeklyState"))
      : totalShiftsWeekly
  );
  const [workSchedule, setSchedule] = useState(
    localStorage.getItem("schedule")
      ? JSON.parse(localStorage.getItem("schedule"))
      : schedule
  );

  // This function will be passed down to the ScheduleSelect component that will be rendered in the table
  // Used to fill the state of the schedule using randomization
  const autoFillSchedule = () => {
    for (const field in workSchedule) {
      const sampleOptions = ["X1", "X2", "X3", "X4", "X5", "X6", "X7"];
      for (let i = 0; i < 5; i++) {
        if (workSchedule[field].staff[i] === "") {
          if (field === "Morning Up Stairs") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Morning Down Stairs"].staff[i] &&
                option !== workSchedule["Morning Parking Lot"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
              const copyDaily = { ...dailyState };
              copyDaily[randomOption][i] += 1;
              setDailyState(copyDaily);
              weeklyState[randomOption] += 1;
              setWeeklyState(weeklyState);
            }
          } else if (field === "Morning Down Stairs") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Morning Up Stairs"].staff[i] &&
                option !== workSchedule["Morning Parking Lot"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
              const copyDaily = { ...dailyState };
              copyDaily[randomOption][i] += 1;
              setDailyState(copyDaily);
              weeklyState[randomOption] += 1;
              setWeeklyState(weeklyState);
            }
          } else if (field === "Morning Parking Lot") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Morning Up Stairs"].staff[i] &&
                option !== workSchedule["Morning Down Stairs"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
              const copyDaily = { ...dailyState };
              copyDaily[randomOption][i] += 1;
              setDailyState(copyDaily);
              weeklyState[randomOption] += 1;
              setWeeklyState(weeklyState);
            }
          } else if (field === "Lunch B") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Lunch A"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
            }
          } else if (field === "Lunch C") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Lunch B"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
            }
          } else if (field === "Lunch D") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Lunch C"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
            }
          } else if (field === "Afternoon Up Stairs") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Afternoon Down Stairs"].staff[i] &&
                option !== workSchedule["Afternoon Parking Lot"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
              const copyDaily = { ...dailyState };
              copyDaily[randomOption][i] += 1;
              setDailyState(copyDaily);
              weeklyState[randomOption] += 1;
              setWeeklyState(weeklyState);
            }
          } else if (field === "Afternoon Down Stairs") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Afternoon Up Stairs"].staff[i] &&
                option !== workSchedule["Afternoon Parking Lot"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
              const copyDaily = { ...dailyState };
              copyDaily[randomOption][i] += 1;
              setDailyState(copyDaily);
              weeklyState[randomOption] += 1;
              setWeeklyState(weeklyState);
            }
          } else if (field === "Afternoon Parking Lot") {
            const result = sampleOptions.filter(
              (option) =>
                option !== workSchedule["Afternoon Down Stairs"].staff[i] &&
                option !== workSchedule["Afternoon Up Stairs"].staff[i] &&
                dailyState[option][i] < 2 &&
                weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
            }
          } else {
            const result = sampleOptions.filter(
              (option) => dailyState[option][i] < 2 && weeklyState[option] < 7
            );
            if (result.length === 0) {
              alert("No more options for " + field + " on " + headers[i + 1]);
            } else {
              const randomIndex = Math.floor(Math.random() * result.length);
              const randomOption = result[randomIndex];
              const copySchedule = { ...workSchedule };
              copySchedule[field].staff[i] = randomOption;
              setSchedule(copySchedule);
              const copyDaily = { ...dailyState };
              copyDaily[randomOption][i] += 1;
              setDailyState(copyDaily);
              weeklyState[randomOption] += 1;
              setWeeklyState(weeklyState);
            }
          }
        }
      }
    }
    localStorage.setItem("schedule", JSON.stringify(workSchedule));
    localStorage.setItem("dailyState", JSON.stringify(dailyState));
    localStorage.setItem("weeklyState", JSON.stringify(weeklyState));
  };

  // Clear schedule and reset state
  const clearSchedule = () => {
    const emptySchedule = {
      "Morning Up Stairs": {
        staff: ["", "", "", "", ""],
      },
      "Morning Down Stairs": {
        staff: ["", "", "", "", ""],
      },
      "Morning Parking Lot": {
        staff: ["", "", "", "", ""],
      },
      "Lunch A": {
        staff: ["", "", "", "", ""],
      },
      "Lunch B": {
        staff: ["", "", "", "", ""],
      },
      "Lunch C": {
        staff: ["", "", "", "", ""],
      },
      "Lunch D": {
        staff: ["", "", "", "", ""],
      },
      "Afternoon Up Stairs": {
        staff: ["", "", "", "", ""],
      },
      "Afternoon Down Stairs": {
        staff: ["", "", "", "", ""],
      },
      "Afternoon Parking Lot": {
        staff: ["", "", "", "", ""],
      },
    };

    const emptyTotalShiftsDaily = {
      X1: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      X2: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      X3: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      X4: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      X5: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      X6: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      X7: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
    };

    const emptyTotalShiftsWeekly = {
      X1: 0,
      X2: 0,
      X3: 0,
      X4: 0,
      X5: 0,
      X6: 0,
      X7: 0,
    };

    setSchedule(emptySchedule);
    setDailyState(emptyTotalShiftsDaily);
    setWeeklyState(emptyTotalShiftsWeekly);
    localStorage.clear();
  };

  return (
    <div>
      <div className="button-container">
        <button className="button" onClick={autoFillSchedule}>
          Generate Schedule
        </button>
        <button className="button" onClick={clearSchedule}>
          Clear Schedule
        </button>
      </div>
      <h2 className="fillShifts">
        Employees needed to fill shifts:{" "}
        {Object.values(weeklyState).filter((value) => value > 0).length}
      </h2>
      <table>
        <caption>Schedule</caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {columns.map((colName, index) => (
            <tr key={index}>
              <td>{colName}</td>
              {headers.map(
                (header, index) =>
                  index > 0 && (
                    <td key={index}>
                      <ScheduleSelect
                        totalShiftsDaily={dailyState}
                        totalShiftsWeekly={weeklyState}
                        options={options}
                        index={index}
                        header={header}
                        colName={colName}
                        workSchedule={workSchedule}
                        setSchedule={setSchedule}
                        setDailyState={setDailyState}
                        setWeeklyState={setWeeklyState}
                      />
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <caption>Load</caption>
        <thead>
          <tr>
            {staffMemberHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(dailyState).map(([staffMember, shifts]) => (
            <tr key={`${shifts} + ${staffMember}`}>
              <td>{staffMember}</td>
              {Object.values(shifts).map((shift, index) => (
                <td key={`${shift} + ${index}`}>{shift}</td>
              ))}
              <td>{weeklyState[staffMember]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scheduler;

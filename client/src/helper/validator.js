export const validateLunch = (schedule, selectedOption, colName, rowId) => {
  // Function to validate lunch shifts and ensure there are no consecutive lunch shifts
  if (colName === "Lunch B") {
    if (schedule["Lunch A"].staff[rowId - 1] === selectedOption.value) {
      alert("This person is already scheduled for Lunch A");
    } else {
      return true;
    }
  } else if (colName === "Lunch C") {
    if (schedule["Lunch B"].staff[rowId - 1] === selectedOption.value) {
      alert("This person is already scheduled for Lunch B");
    } else {
      return true;
    }
  } else {
    if (schedule["Lunch C"].staff[rowId - 1] === selectedOption.value) {
      alert("This person is already scheduled for Lunch C");
    } else {
      return true;
    }
  }
  return false;
};

export const validateMorning = (schedule, selectedOption, colName, rowId) => {
  // Function to validate morning shifts and ensure a single employee is not scheduled for more than one morning shift
  if (colName === "Morning Up Stairs") {
    if (
      schedule["Morning Down Stairs"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Morning Down Stairs`
      );
    } else if (
      schedule["Morning Parking Lot"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Morning Parking Lot`
      );
    } else {
      return true;
    }
  } else if (colName === "Morning Down Stairs") {
    if (
      schedule["Morning Up Stairs"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Morning Up Stairs`
      );
    } else if (
      schedule["Morning Parking Lot"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Morning Parking Lot`
      );
    } else {
      return true;
    }
  } else {
    if (
      schedule["Morning Down Stairs"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Morning Down Stairs`
      );
    } else if (
      schedule["Morning Up Stairs"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Morning Up Stairs`
      );
    } else {
      return true;
    }
  }
  return false;
};

export const validateAfternoon = (schedule, selectedOption, colName, rowId) => {
  // Function to validate afternoon shifts and ensure a single employee is not scheduled for more than one afternoon shift
  if (colName === "Afternoon Up Stairs") {
    if (
      schedule["Afternoon Down Stairs"].staff[rowId - 1] ===
      selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Afternoon Down Stairs`
      );
    } else if (
      schedule["Afternoon Parking Lot"].staff[rowId - 1] ===
      selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Afternoon Parking Lot`
      );
    } else {
      return true;
    }
  } else if (colName === "Afternoon Down Stairs") {
    if (
      schedule["Afternoon Up Stairs"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Afternoon Up Stairs`
      );
    } else if (
      schedule["Afternoon Parking Lot"].staff[rowId - 1] ===
      selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Afternoon Parking Lot`
      );
    } else {
      return true;
    }
  } else {
    if (
      schedule["Afternoon Up Stairs"].staff[rowId - 1] === selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Afternoon Up Stairs`
      );
    } else if (
      schedule["Afternoon Down Stairs"].staff[rowId - 1] ===
      selectedOption.value
    ) {
      alert(
        `Employee ${selectedOption.value} is already scheduled for Afternoon Down Stairs`
      );
    } else {
      return true;
    }
  }
  return false;
};

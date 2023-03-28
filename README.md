# Automatic/Manual Scheduler

## Basic Usage

```
cd client
npm install
npm run build
cd ..

cd server
npm install
```

## Basic Usage

```
node index.js
`Generate Schedule` - to generate a new schedule
`Clear Schedule` - to clear a schedule and generate a new one
```

## Schedule data object

```jsx
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
```

Each field in the `schedule` object represents a shift and each shift consists of an `staff array` which has a length of 5.
Each index in the staff array represents what employee is currently assigned on the day.
For example:

`staff: ["X1", "X2", "X3", "X4", "X5"]` represents employee X1 working on Monday, X2 on Tuesday, X3 on Wednesday, so on and so forth

This object is used to fill and keep track of the `Schedule` table

## Load data structure

```jsx
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
```

Each field in the `totalShiftsDaily` object represents an employee and each employee consists of an `day-totalShifts` object which has 5 values.
Each index in the staff array represents how many shifts that particular employee is working on that specific day.
`0 represents Monday, 1 represents Tuesday, ....`

Each field in the `totalShiftsWeekly` object represents an employee and each employee consists of `total weekly shifts` value.

These objects are used to keep track of employee shifts and ensure no `total weekly shifts` do not exceed 7
and `total daily shifts` do not exceed 2 for any employee

## Features

- Server serves a ReactJS page which is static.
- ReactJS page uses a dropdown list to select employees.
- ReactJS page displays all staff in the Load section, with their number of slots correct for each day, and the correct total for the week
- ReactJS page prevents and displays warning when a staff member is in consecutive lunch slots on the same day.
- ReactJS page prevents and displays warning when a staff member has more than 2 shifts per day
- ReactJS page prevents and displays warning when a staff member has more than 7 shifts per week
- ReactJS page prevents and displays warning when a staff member is selected to be in two places at once.
- ReactJS page allows randomised population of currently empty shifts using the `Generate Schedule` button. It allows for clearing all shifts using the `Clear Schedule` button.
- ReactJS page reports how many staff members are needed to fill all shifts.
- ReactJS page stores current progress at the server using `localStorage`
- ReactJS page can retrieve current state when re-opened using `localStorage`

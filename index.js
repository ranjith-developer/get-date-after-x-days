const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  newDate = addDays(new Date(2022, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;

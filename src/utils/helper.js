const { DATE } = require("sequelize/lib/data-types");


function compareTime(dateTimeStringT1, dateTimeStringT2) {
    let dateTime1 = new Date(dateTimeStringT1);
    let dateTime2 = new Date(dateTimeStringT2);
    return dateTime1 > dateTime2;
}


module.exports = {
    compareTime
}
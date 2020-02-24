const marks = require("./models/marks");
const student = require("./models/student");

const sandraGrade = new marks('SST', 'Rety', 85);
sandraGrade.computeGrade();
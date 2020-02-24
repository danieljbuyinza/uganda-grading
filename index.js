const marks = require("./models/marks")
const student = require("./models/student")


const mark1 = new marks("SST","Maria",85)
mark1.computeScore();

const mark2 = new marks("SST","Angella",40)
mark2.computeScore();
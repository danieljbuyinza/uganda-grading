class Marks{
    constructor(name, subject,marks){
     this.subject = subject
     this.student = student
     this.marks = marks   
    }

computeScore() {
    if(marks>80){
        console.log("You have an A")
    }
    else if(marks > 70 && marks< 80){
        console.log("You have a B")
    }
    else if (marks > 60 && marks < 70) {
        console.log("You have a C")
    }
    else if (marks > 50 && marks < 60) {
        console.log("You have a D")
    }
    else if (marks > 40 && marks < 50) {
        console.log("You have a E")
    }
    else if (marks > 0 && marks < 40) {
        console.log("You have a F")
    }
}
}
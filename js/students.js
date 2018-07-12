"use strict";
var count = 1;
var student = /** @class */ (function () {
    function student(FirstName, LastName, GPA, SAT) {
        if (GPA === void 0) { GPA = 4; }
        if (SAT === void 0) { SAT = 1200; }
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.GPA = GPA;
        this.SAT = SAT;
        this.id = 0 + count;
        count++;
    }
    student.prototype.print = function () {
        console.log(this.FirstName + " " + this.LastName + " id is " + this.id + " GPA:" + this.GPA + " SAT:" + this.SAT);
    };
    return student;
}());
var student1 = new student('Larry', 'Shimmell');
var student2 = new student('Will', 'Stefon');
var student3 = new student('Jeff', 'Black');
var student4 = new student('Gale', 'Mothz');
student1.print();
student2.print();
student3.print();
student4.print();

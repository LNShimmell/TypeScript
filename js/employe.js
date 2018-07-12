"use strict";
var count = 0;
var employee = /** @class */ (function () {
    function employee(FirstName, LastName, Salary, Active) {
        if (Active === void 0) { Active = true; }
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Salary = Salary;
        this.id = ++count;
        this.Active = Active;
    }
    employee.prototype.cash = function (Salary) {
        return Salary.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };
    employee.prototype.print = function () {
        console.log("Employee Id: " + this.id + " Name: " + this.LastName + ", " + this.FirstName + " Salary: $" + this.cash(this.Salary) + " Active: " + this.Active);
    };
    return employee;
}());
var employees = [];
var e1 = new employee('Larry', 'Shimmell', 65000);
var e2 = new employee('John', 'Johnson', 99999);
var e3 = new employee('Logan', 'Black', 99999);
var e4 = new employee('Lord', 'Raiden', 99999);
employees.push(e1, e2, e3, e4);
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee_1 = employees_1[_i];
    employee_1.print();
}

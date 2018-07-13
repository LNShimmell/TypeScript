"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var account = /** @class */ (function () {
    function account(description, FirstName, LastName, Memo, TransactionNumber) {
        this.id = account.nextId;
        this.Memo = [];
        this.transactionNumber = account.setter;
        this.id = account.nextId++;
        this.description = description;
        this.balance = 0;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
    account.prototype.deposit = function (amount) {
        this.balance += amount;
        this.transactionNumber++;
        this.Memo.push('Account Type: ' + this.description + ' Transaction Number: ' + this.transactionNumber.toString() + " Balance: " + this.balance.toString() + ' ' + "Deposit: " + amount.toString());
    };
    account.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            this.transactionNumber++;
            this.Memo.push('Account Type: ' + this.description + ' Transaction Number: ' + this.transactionNumber.toString() + " Balance: " + this.balance.toString() + ' ' + "Withdraw: " + amount.toString());
        }
        else {
            console.log("You don't have suffecent funds!");
        }
    };
    account.prototype.getbalance = function () {
        return this.balance;
    };
    account.prototype.getMemo = function () {
        for (var _i = 0, _a = this.Memo; _i < _a.length; _i++) {
            var mems = _a[_i];
            console.log(mems);
        }
    };
    account.nextId = 1;
    account.setter = 0;
    return account;
}());
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(description, FirstName, LastName, intRate) {
        if (intRate === void 0) { intRate = 0.01; }
        var _this = _super.call(this, description, FirstName, LastName) || this;
        _this.intRate = intRate;
        _this.FirstName = FirstName;
        _this.LastName = LastName;
        return _this;
    }
    Savings.prototype.calcInterest = function () {
        var interest = this.balance * this.intRate;
        var transaction = interest.toString();
        this.deposit(interest);
    };
    return Savings;
}(account));
var Checkings = /** @class */ (function (_super) {
    __extends(Checkings, _super);
    function Checkings(description, FirstName, LastName) {
        return _super.call(this, description, FirstName, LastName) || this;
    }
    return Checkings;
}(account));
var sav1 = new Savings('Savings', "Larry", "Shimmell");
var chk1 = new Checkings('Checking', 'Larry', 'Shimmell');
sav1.deposit(10000);
sav1.calcInterest();
sav1.deposit(1000);
sav1.calcInterest();
sav1.deposit(1000);
sav1.calcInterest();
sav1.getMemo();
chk1.deposit(1000);
chk1.withdraw(10.50);
chk1.withdraw(99.50);
chk1.deposit(10.44);
chk1.getMemo();

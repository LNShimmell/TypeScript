"use strict";
var friend = /** @class */ (function () {
    function friend(Name, YearsKnown, cityState) {
        this.Id = friend.getId++;
        this.Name = Name;
        this.YearsKnown = YearsKnown;
        this.cityState = cityState;
    }
    friend.prototype.whoMyfriend = function () {
        return ("Name: " + this.Name + " Id: " + this.Id + " Known for " + this.YearsKnown + " years Lives near: " + this.cityState);
    };
    friend.getId = 1;
    return friend;
}());
var f1 = new friend('Will', 1, "Right next next to me");
var f2 = new friend('John', 1, 'infront of me to the left');
var f3 = new friend('Marcus', 1, 'To the left of Will');
var f4 = new friend('Foster', 1, 'To the left of Marcus');
var friends = [];
friends.push(f1, f2, f3, f4);
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var person = friends_1[_i];
    console.log(person.whoMyfriend());
}

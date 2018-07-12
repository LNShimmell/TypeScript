"use strict";
var a = 0;
var b = "ABC";
function add1(num) {
    num++;
    console.log(num);
}
add1(a);
function log(str) {
    console.log("the value of the input is " + str);
}
log(b);
function create() {
    var buttons = document.getElementById('body-main');
    buttons.innerHTML = '';
    var button1 = '<button type="button" onclick="increase()">+</button>';
    var input = '<input type="number" id="input">';
    var button2 = '<button type="button" onclick="descrease()">-</button>';
    buttons.innerHTML += button1 + input + button2;
    var numbz = document.getElementById('input');
    numbz.value = 0;
}
function increase() {
    var numb = document.getElementById('input');
    numb.value++;
}
function descrease(numb) {
    var numb = document.getElementById('input');
    numb.value--;
}

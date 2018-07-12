let a:number = 0;
let b:string = "ABC"

function add1(num: number){
    num ++;
    console.log(num);
}


add1(a);

function log( str: string): void {
    console.log(`the value of the input is ${str}`);
}

log(b);

function create(){
    var buttons = document.getElementById('body-main');
    buttons.innerHTML = '';
    var button1 = '<button type="button" onclick="increase()">+</button>';
    var input = '<input type="number" id="input">';
    var button2 = '<button type="button" onclick="descrease()">-</button>';
    buttons.innerHTML += button1 + input + button2;
    var numbz = document.getElementById('input');
    numbz.value = 0;
}

function increase():number{
    var numb = document.getElementById('input');
    numb.value++;
    
}

function descrease(numb: number):number {
    var numb = document.getElementById('input');
    numb.value--;
}
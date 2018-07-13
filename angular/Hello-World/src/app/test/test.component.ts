import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
              {{crap()}}
            </div>`,
  
  styles: [`
  div {
    color: red;
  }
  `]
})
export class TestComponent implements OnInit {
  public name = "This is a large test to test the test that I want to test.";
  constructor() {

  }

  crap(){
    var times = this.name;
    let x: number = times.length;
    var print:any[] = [];
    var y = '';
    while(x>0){
       print.push(this.name + ' ');
       x--;
    }
    for(var crap of print){
      y += crap;
    }
    return y;
  }


  
    

  ngOnInit() {
   
  }

}

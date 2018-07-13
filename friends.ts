class friend{
     Name: string;
     static getId: number = 1;
     Id: number;
     YearsKnown: number;
     cityState: string;

     constructor(Name: string, YearsKnown: number, cityState: string){
         this.Id = friend.getId++;
         this.Name = Name; this.YearsKnown = YearsKnown; this.cityState = cityState;

     }

    whoMyfriend(): string {
         return ("Name: "+this.Name + " Id: " + this.Id + " Known for " + this.YearsKnown+ " years Lives near: " + this.cityState);
     }

}

let f1 = new friend('Will', 1, "Right next next to me");
let f2 = new friend('John', 1, 'infront of me to the left');
let f3 = new friend( 'Marcus', 1, 'To the left of Will');
let f4 = new friend( 'Foster', 1, 'To the left of Marcus');

let friends: friend[] = [];
friends.push( f1, f2, f3, f4);

for(var person of friends){
    console.log(person.whoMyfriend());
}




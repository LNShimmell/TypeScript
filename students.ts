

var count = 1;
class student {
    id: number;
    FirstName: string;
    LastName: string;
    GPA: number;
    SAT: number;
    

    print(): void{
        console.log(`${this.FirstName} ${this.LastName} id is ${this.id} GPA:${this.GPA} SAT:${this.SAT}`);
    }

    constructor(FirstName: string, LastName: string, GPA: number = 4, SAT: number= 1200) {
        this.FirstName = FirstName; this.LastName = LastName;
        this.GPA = GPA; this.SAT = SAT; this.id = 0 + count; count++;
    }
}

let student1: student = new student('Larry', 'Shimmell');
let student2: student = new student('Will', 'Stefon');
let student3: student = new student('Jeff', 'Black');
let student4: student = new student('Gale', 'Mothz');

student1.print();
student2.print();
student3.print();
student4.print();


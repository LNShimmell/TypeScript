var count = 0;

class employee {
        id: number;
        FirstName: string;
        LastName: string;
        Salary: number;
        Active: boolean;
        constructor(FirstName: string, LastName: string, Salary: number, Active: boolean = true){
            this.FirstName = FirstName; this.LastName = LastName; 
            this.Salary = Salary; this.id = ++count; this.Active = Active;

        }
        public cash(Salary: number):string{
            
           return Salary.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        public print():void{
            console.log(`Employee Id: ${this.id} Name: ${this.LastName}, ${this.FirstName} Salary: $${this.cash(this.Salary)} Active: ${this.Active}`);
        }

        
    
}
let employees: employee[] = [];
let e1: employee = new employee('Larry', 'Shimmell', 65000);
let e2: employee = new employee('John', 'Johnson', 99999);
let e3: employee = new employee('Logan', 'Black', 99999);
let e4: employee = new employee('Lord', 'Raiden', 99999);
employees.push(e1,e2,e3,e4);

for(let employee of employees){
    employee.print();
}

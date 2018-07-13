
abstract class account {
    static nextId: number = 1;
    id: number= account.nextId;
    description: string;
    FirstName: string;
    LastName: string;
    balance: number;
    Memo: string[] = [];
    static setter: number = 0;
    transactionNumber: number = account.setter;

    constructor(description: string, FirstName: string, LastName: string, Memo?: string[], TransactionNumber?: number){
        this.id = account.nextId++; 
        this.description = description;
        this.balance = 0;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }

    deposit(amount: number): void {
        this.balance += amount;
        this.transactionNumber++;
        this.Memo.push('Account Type: ' + this.description + ' Transaction Number: '+ this.transactionNumber.toString() +" Balance: " + this.balance.toString() + ' ' + "Deposit: " + amount.toString());
    }

    withdraw(amount: number): void {
        if(this.balance> amount){
        this.balance -= amount;
        this.transactionNumber++;
        this.Memo.push('Account Type: ' + this.description  + ' Transaction Number: '+ this.transactionNumber.toString() +" Balance: " + this.balance.toString() + ' ' + "Withdraw: " + amount.toString());
        }
        else{console.log("You don't have suffecent funds!")}
    }
    getbalance():number{
        return this.balance;
    }
    getMemo(){
        for(var mems of this.Memo){
            console.log(mems);
        }
    }
}

class Savings extends account{

    
    intRate: number;

    constructor(description: string,FirstName: string, LastName: string, intRate: number = 0.01){
        super(description, FirstName, LastName);
        this.intRate = intRate;
        this.FirstName = FirstName; this.LastName = LastName;

    }

    calcInterest(){
        let interest = this.balance * this.intRate;
        let transaction:string = interest.toString();
        this.deposit(interest);
    }

   
    
}

class Checkings extends account{
    

    constructor(description: string, FirstName: string, LastName: string){
        super(description, FirstName, LastName)
    }

}

let sav1: Savings = new Savings('Savings',"Larry", "Shimmell");
let chk1: Checkings = new Checkings('Checking','Larry', 'Shimmell');
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





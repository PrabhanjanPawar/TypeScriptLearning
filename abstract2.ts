// full time  8 
// contract 

abstract class Employee {
    name: string;
    paymentPerHour: number;

    // parameterized constructor
    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    // this method is abstract method only declaration 
    public abstract CalculateSalary(): number;
}

//let empl = new Employee();

class Contractor extends Employee { 

    hoursOfWorking: number;

    constructor(name: string, paymentPerHour: number, hoursOfWorking: number) 
    {
        // parent class constructor by using super.
        super(name, paymentPerHour);
        this.hoursOfWorking = hoursOfWorking;
    }

    public CalculateSalary(): number {
        return this.paymentPerHour * this.hoursOfWorking;
    }
}

class FullTimeEmployee  extends Employee {
   
    // parameterized constructor
    constructor(name: string, paymentPerHour: number) {
        super(name, paymentPerHour);
    }

    public CalculateSalary(): number {
       return this.paymentPerHour * 8;
    }
}

let objcontractor = new Contractor('Harry', 8, 10); // 80 
let objfullTimeEmployee = new FullTimeEmployee('Jack', 8); //64
//let objcontractor1=new Contractor("Ajay", 12, 7);

console.log(objcontractor.CalculateSalary());
console.log(objfullTimeEmployee.CalculateSalary());

//console.log(objcontractor1.CalculateSalary());

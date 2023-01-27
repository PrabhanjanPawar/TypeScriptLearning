console.log(`1)-------"This is Union type : "-------\n`);

var details : number | string | boolean;

details = 'Company';
details = 60000;
details = 'True';

function unionDetails(input:string | string[]) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' , ');
    }
    return line;
}
//console.log(`1)-------"This is Union type : "-------\n`);

console.log(unionDetails('Capgemini  '));
//console.log(unionDetails(60000));
console.log(unionDetails('True'));
console.log(unionDetails(['This','is','my','Dream','company']));

console.log(`2)-------"Class parameter : "-------\n`);
class Person {

    constructor(public name : string, public  number : number){
        
    }
}
const aja = new Person('Ajay', 9970954396);
//console.log(aja.name, aja.number);

const vija = new Person('Vijay', 8796543456);
//console.log(vija.name, vija.number);
console.log(aja);
console.log(vija);

console.log(`3)-------"Intersection Type : "-------\n`);

type Prabhu = {
    name : string;
}

type Company ={
    company : string;
}

type Contact = {
    number : number;
}

type offerLetter = 
& Prabhu
& Company
& Contact;

function offer (welcome : offerLetter){

    console.log(`Congratulations '${welcome.name}' , You are selected for '${welcome.company}' , will contact you for Salary discussion on '${welcome.number}' Please suggest convinient time`);
        
}

let offerObject : & Prabhu & Company & Contact = {name:"Prabhanjan", company:"Infosys", number:9503850345}
offer(offerObject);

console.log(`4)-------"Optional Parameter : Location is Optional"-------\n`);

function show(company : string, salary: number, location?: string){

    console.log(`Company  : `, company);
    console.log(`Salary   : `, salary);

    if (location != undefined) {
        console.log(`Location : `, location);    
    }
    
}          
 show('Infosys',65000, 'Pune');
 show('CapGemini', 70000,);






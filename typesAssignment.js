var details;
details = 'Company';
details = 60000;
details = 'True';
function unionDetails(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' , ');
    }
    return line;
}
console.log("1)-------\"This is Union type : \"-------\n");
console.log(unionDetails('Capgemini  '));
//console.log(unionDetails(60000));
console.log(unionDetails('True'));
console.log(unionDetails(['This', 'is', 'my', 'Dream', 'company']));
console.log("2)-------\"Class parameter : \"-------\n");
var Person = /** @class */ (function () {
    function Person(name, number) {
        this.name = name;
        this.number = number;
    }
    return Person;
}());
var aja = new Person('Ajay', 9970954396);
//console.log(aja.name, aja.number);
var vija = new Person('Vijay', 8796543456);
//console.log(vija.name, vija.number);
console.log(aja);
console.log(vija);
console.log("3)-------\"Intersection Type : \"-------\n");
function offer(welcome) {
    console.log("Congratulations '".concat(welcome.name, "' , You are selected for '").concat(welcome.company, "' , will contact you for Salary discussion on '").concat(welcome.number, "' Please suggest convinient time"));
}
var offerObject = { name: "Prabhanjan", company: "Infosys", number: 9503850345 };
offer(offerObject);
console.log("4)-------\"Optional Parameter : Location is Optional\"-------\n");
function show(company, salary, location) {
    console.log("Company  : ", company);
    console.log("Salary   : ", salary);
    if (location != undefined) {
        console.log("Location : ", location);
    }
}
show('Infosys', 65000, 'Pune');
show('CapGemini', 70000);

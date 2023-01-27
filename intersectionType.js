function contact(details) {
    console.log("Dear ".concat(details.name, " .\n    I hope you have received our email at ").concat(details.email, ".\n    We will call you at ").concat(details.phone, " shortly ,"));
}
var objContact = { name: "Prabhanjan", email: "prabhu@gmail.com", phone: 9503850345 };
contact(objContact);
// Another way to declare 
// function contact(details: Person2 & Email & Phone) {
//     console.log(`Dear ${details.name} .
//     I hope you have received our email at ${details.email}.
//     We will call you at ${details.phone} shortly ,`) ;
// }

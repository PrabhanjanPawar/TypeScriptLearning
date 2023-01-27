type Person2 = {
    name: string;
}

type Email = {
    email: string;
}

type Phone = {
    phone: number;
}

type ContactDetails = 
& Person2
& Email
& Phone;

function contact(details: ContactDetails) {
    console.log(`Dear ${details.name} , I hope you have received our email at ${details.email},We will call you at ${details.phone} shortly ,`) ;
    }

let objContact : Person2 & Email & Phone = {name:"Prabhanjan", email:"prabhu@gmail.com", phone:9503850345}
contact(objContact);

// Another way to declare 
// function contact(details: Person2 & Email & Phone) {
//     console.log(`Dear ${details.name} .
//     I hope you have received our email at ${details.email}.
//     We will call you at ${details.phone} shortly ,`) ;
// }

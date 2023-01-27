alert("Hey...You want to Calculate your Grade...");

const maths = Number (prompt("Please enter marks of Mathematics"));
const physics = Number(prompt("Please enter marks of Physics"));
const chemistry = Number(prompt("Please enter marks of Chemistry"));

console.log(`Marks of Mathematic is : ${maths}`);
console.log(`Marks of Physics is : ${physics}`);
console.log(`Marks of Chemistry is : ${chemistry}`);

confirm(`Thanks for providing details,Click "Ok" for Addition of Marks`)

// if (maths > 0 || maths < 100 && physics > 0 || physics < 100 && physics > 0 || physics < 100) {
    
const sum = maths + physics + chemistry;
console.log(`Addition of Total marks is : ${sum}`);
const average = sum/3;
//console.log((average).toFixed(3));

alert(`Addition of Total marks is : ${sum}`);
confirm(`Click "Ok" to see the Average of Marks`)

console.log(`The Average of marks is : ${(average).toFixed(2)}`);

alert(`The Average of marks is : ${(average).toFixed(2)}`);
confirm(`Click "Ok" to see the Grade as per your Marks`)

if (average < 70) {
    console.log(`Hey...Your grade is "C"`);
    alert(`Hey...Your grade is "C"`);
}    
if(average > 70 && average < 90){
    console.log(`Hey ...Your grade is "B"`);
    alert(`Hey...Your grade is "B"`);
}
if (average > 90){
    console.log(`Hey...Your grade is "A"`);
    alert(`Hey...Your grade is "A"`)
}

// }else{
//     console.log(`Please provide valid numbers`);
    
// }



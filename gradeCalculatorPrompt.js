alert("Hey...You want to Calculate your Grade...");
var maths = Number(prompt("Please enter marks of Mathematics"));
var physics = Number(prompt("Please enter marks of Physics"));
var chemistry = Number(prompt("Please enter marks of Chemistry"));
console.log("Marks of Mathematic is : ".concat(maths));
console.log("Marks of Physics is : ".concat(physics));
console.log("Marks of Chemistry is : ".concat(chemistry));
confirm("Thanks for providing details,Click \"Ok\" for Addition of Marks");
var sum = maths + physics + chemistry;
console.log("Addition of Total marks is : ".concat(sum));
var average = sum / 3;
//console.log((average).toFixed(3));
alert("Addition of Total marks is : ".concat(sum));
confirm("Click \"Ok\" to see the Average of Marks");
console.log("The Average of marks is : ".concat((average).toFixed(2)));
alert("The Average of marks is : ".concat((average).toFixed(2)));
confirm("Click \"Ok\" to see the Grade as per your Marks");
if (average < 70) {
    console.log("Hey...Your grade is \"C\"");
    alert("Hey...Your grade is \"C\"");
}
if (average > 70 && average < 90) {
    console.log("Hey ...Your grade is \"B\"");
    alert("Hey...Your grade is \"B\"");
}
if (average > 90) {
    console.log("Hey...Your grade is \"A\"");
    alert("Hey...Your grade is \"A\"");
}

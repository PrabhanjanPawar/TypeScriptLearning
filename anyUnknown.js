"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
function loadString() {
    return 'some string ';
}
function loadNumber() {
    return 123.456;
}
var someVariable;
someVariable = loadString();
console.log(someVariable.trim());
someVariable = loadNumber();
console.log(someVariable.toFixed(2));
//---------------------------------------Using Unknown       
var someVariable1;
someVariable1 = loadString();
if (typeof someVariable1 == 'string') {
    console.log(someVariable1.trim());
}
someVariable1 = loadNumber();
if (typeof someVariable1 == 'number') {
    console.log(someVariable1.toFixed(2));
}
//========== Type Assertion =========
function load() {
    return 'Hello World ';
}
var hello = load();
//onst trimmed = hello.trim();    // it will through error
var trimmed = hello.trim();
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;

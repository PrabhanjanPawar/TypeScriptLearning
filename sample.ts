// let num1 : number = 20;
// let num2 : number = 13;
// const addition = num1 + num2;
// console.log(`The Addition of ${num1} AND ${num2} is : ${addition}`);

// // parent class , Base class , Super 
// class Animal {

//     name: string;
    
//     // parameterised constructor 
//     constructor(name : string) {
//         this.name = name;
//     }
    
//      move(distance : number) {
//         console.log(`${distance}`);
//      }
//     }
    
//     // child class , sub , derived
//     class Dog extends Animal {
    
//      constructor(name: string) {
//         super(name);
//      }
//       bark() 
//       {
//         console.log('bho bho');
//       }
//     }

    import {isPalindrome} from './anyUnknown';
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('madan')); // false
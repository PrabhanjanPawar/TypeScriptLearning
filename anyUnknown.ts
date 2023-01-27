function loadString(): any {
    return 'some string ';
     }
    function loadNumber(): any {
    return 123.456;
     }
    let someVariable : any;
    someVariable = loadString();
    console.log(someVariable.trim());

    someVariable = loadNumber();
    console.log(someVariable.toFixed(2));
  //---------------------------------------Using Unknown       
    let someVariable1 : unknown;
someVariable1 = loadString();
if(typeof someVariable1 == 'string')
 {
console.log(someVariable1.trim());
 }

 someVariable1 = loadNumber();
if(typeof someVariable1 == 'number')
 {
console.log(someVariable1.toFixed(2));
 }

 //========== Type Assertion =========
 function load(): unknown {
    return 'Hello World ';
     }
    let hello = load();
    //onst trimmed = hello.trim();    // it will through error
    const trimmed = (hello as string).trim();

    export function isPalindrome(str: string): boolean {
        return str === str.split('').reverse().join('');
        }

        
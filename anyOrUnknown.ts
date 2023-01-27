let value: unknown;
let value1: unknown = value; // OK      //we can assign 'unknown' value to 'unknown' datatype variable
let value2: any = value; // OK          //we can assign 'unknown' value to 'any' datatype variable
let value3: boolean = value; // Error   //but we can not assign 'unknown' value to 'boolean' datatype variable
let value4: number = value; // Error    //but we can not assign 'unknown' value to 'number' datatype variable
let value5: string = value; // Error    //but we can not assign 'unknown' value to 'string' datatype variable
let value6: object = value; // Error    //but we can not assign 'unknown' value to 'object' datatype variable
let value7: any[] = value; // Error     //but we can not assign 'unknown' value to 'any[]' datatype variable

let values: unknown;
values = true; // OK
values = 42; // OK
values = "Hello World"; // OK
values = []; // OK
values = {}; // OK
values= Math.random; // OK
values = null; // OK
values = undefined; // OK
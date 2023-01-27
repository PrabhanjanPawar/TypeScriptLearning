var sn: string | number;

sn = 'codemind';
sn = 100; 
 
type test =
string | string[];

function formatCommandLine(input: test) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}


console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
//console.log(formatCommandLine(123457));
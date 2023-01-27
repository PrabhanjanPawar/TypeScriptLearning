//if we don't have to show any parameter or any value, we can assign as optional using (?)
function display(id: number, name: string, role?: string) {
    console.log('Id', id);
    console.log('Name', name);
    if(role != undefined) {
        console.log('Role', role);// 
    }
}
display(1, 'Harry', 'Admin'); 

display(2, 'Jackson');

function show(num1:Number, num2:Number, num3?:Number) {
    
    console.log(`Number1 = : `,num1);
    console.log(`Number2 = : `,num2);
    //console.log(`Number3 = : `,num3);
    
    if (num3 != undefined) {
        console.log(`Number = :`,num3);    
    }
    
}
//show(10, 20, 'Pawar');
show(34,13);
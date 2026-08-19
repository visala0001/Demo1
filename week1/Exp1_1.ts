let userName:string="Alice";
let userAge: number=19;
let isMember:boolean=true;
console.log("Datatype of userName is: "+typeof userName);
console.log("Datatype of userAge is: "+typeof userAge);
console.log("Datatype of isMemeber is: "+typeof isMember);

function displayUserProfile(name:string, age:number, active:boolean):void{
    console.log("User:${name}");
    console.log("Age:${age}");
    console.log('Status: $[active? "Active":"Inactive"}');

}
displayUserProfile(userName,userAge,isMember);

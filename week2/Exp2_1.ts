function greet(name:string):string{
    return 'Hello ${name}, Welcome!';
}
function getLocation(city:string="Hyderabad"):string{
    return 'Location: ${city}';
}
function sendAlert(phoneNumber:number,message?:string):void{
    console.log('Sending SMS to ${phoneNumber}...');
    if(message){
        console.log('Content: ${message}');
    }
}
function calTotalScore(...scores:number[]):number{
    return scores.reduce((total,current)=>total+current,0);
}

console.log(greet("Rani"));
console.log(getLocation());
console.log(getLocation("Rjy"));
sendAlert(1234567890);
sendAlert(1234567890,"Alert message");

const total=calTotalScore(10,20,40,50);
console.log("Total Score: ${total}");

/*function happyBirthDay(username,age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old!`);
}
happyBirthDay("Neeraj",23);
happyBirthDay("Suraj",25);
happyBirthDay("Sonam",20);
function add(x,y){
    let result=x+y;
    return result;
}
function sub(x,y){
    let result=x-y;
    return result;
}
function mul(x,y){
    let result=x*y;
    return result;
}
function div(x,y){
    let result=x/y;
    return result;
}

let answer=div(2,5);
console.log(answer);
*/
function isEvenorOdd(y){
    return y%2==0?true:false;
}
function isEmailValid(email){
  if(email.includes("@") && email.includes(".")){
    return true;
  }
  else{
    return false;
  }
}
console.log(isEmailValid("Neeraj@gmail.com"));
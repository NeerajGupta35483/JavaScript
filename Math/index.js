/*let x=3.11;
let y=2;
let z=9;
//let z=Math.round(x);
//let z=Math.ceil(x);
//let z=Math.floor(x);
//let z=Math.trunc(x);
//let z=Math.pow(x,y);
//let z=Math.sqrt(x*x);
//let z=Math.sine(x);
//let z=Math.cosine(x);
//let z=Math.tan(x);
//let z=Math.abs(x);
//let z=Math.sign(x);
let max=Math.max(x,y,z);
let min=Math.min(x,y,z);


console.log(max,min);
console.log(`i am in the console ${y}`);*/
let min=1;
let max=6;
let mybtn=document.getElementById("mybtn");
let label1=document.getElementById("label1");
let label2=document.getElementById("label2");
let label3=document.getElementById("label3");
 mybtn.onclick=function(){
    let random1=Math.floor(Math.random()*max)+min;
    let random2=Math.floor(Math.random()*max)+min;
    let random3=Math.floor(Math.random()*max)+min;
    label1.textContent=random1;
    label2.textContent=random2;
    label3.textContent=random3;
 }

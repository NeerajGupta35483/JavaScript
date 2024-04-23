const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultelement=document.getElementById("resultelement");

let age;
mysubmit.onclick=function(){
  age=mytext.value;
  age=Number(age);

  if(age>=100){
    resultelement.textContent=`You are too old to enter this site`;
  }
  else if(age==0){
    resultelement.textContent=`You can't enter this site`;
  }
  else if(age>=18){
    resultelement.textContent=`You are  old enough to enter this site`;
  }
  else{
    resultelement.textContent=`You must be 18+ to enter this site`;
  }
}
const checkbox=document.getElementById("checkbox");

const visabtn=document.getElementById("visabtn");
const masterbtn=document.getElementById("masterbtn");
const paypalbtn=document.getElementById("paypalbtn");

const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");


mysubmit.onclick=function(){
    if(checkbox.checked){
        subresult.textContent=`You are subscribed!`;
    }else{
        subresult.textContent=`You are not subscribed!`;
    }

    if(visabtn.checked){
        paymentresult.textContent=`You are paying using visa card!`;
    }else if(masterbtn.checked){
        paymentresult.textContent=`You are paying using master card!`;
    }else if(paypalbtn.checked){
        paymentresult.textContent=`You are paying using paypal mastercard!`;
    }else{
        paymentresult.textContent=`You are not paying using any card`;
    }

}
function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbol){
    const lowerChars="abcdefghijklmnopqrstuvwxyz";
    const upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="~!@#$%^&*()_-+=<>?/";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase?lowerChars:"";
    allowedChars+=includeUppercase?upperChars:"";
    allowedChars+=includeSymbol?symbolChars:"";
    allowedChars+=includeNumbers?numberChars:"";

    if(length <=0){
        return `(password length mst be atleast 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }


return password;
}
const passwordLength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbol=true;
const password=generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbol);
console.log(`The Generated Password is: ${password}`);
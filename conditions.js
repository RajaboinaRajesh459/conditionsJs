// if And else Condition

//Logic for Even or Odd Number
var number="hi";

number%2==0 ? 
console.log("It is an Even Number"):
number%2==1 ?
console.log("it is an Odd Number"):
console.log("It is Not a Number");


// if(number%2===0){

//     console.log("It is an Even Number");
// }else if(number%2===1){
//     console.log("It is an Odd Number");
// }
// else
//     console.log("it is Not a number")
// }

 
//Logic for Prime Number

//it is divisible by one and it self

//prime number 
//1 is neither prime nor composite number
function isPrime(n) { 
    if (n <= 1) 
        return false; 
    for (var i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} 
isPrime(2)  
    ? console.log("It is An Prime Number")  
    : console.log("It is Not An Prime Number"); 





//Logic for marriage for both girl and boy

var gender="M"
var age=21;

if(gender==="M" && age>=21){

    console.log("Eligible Marriage For Boy");
}else if(gender!="M" && age!=21){

    console.log("Eligible Marriage For girl");
}
else{
    console.log("Not eligible for Marriage")
}
//Logic For Month
var Month="December";
switch(Month){
     
    case "January":
        console.log(Month);
        break;
    case "febraury":
        console.log(Month);
        break;
    case "March":
        console.log(Month);
        break;
    case "April":
        console.log(Month);
        break;
    case "May":
        console.log(Month);
        break;
    case "June":
        console.log(Month);
        break;
    case "July":
        console.log(Month);
        break;
    case "Agust":
        console.log(Month);
        break;
    case "September":
        console.log(Month);
        break;
    case "October":
        console.log(Month);
        break;
    case "November":
        console.log(Month);
        break;
    case "December":
        console.log(Month);
        break;
    default :console.log("Not a Month")
}
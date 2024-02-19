
// Falsy values are treated as false in boolean contexts.

// false / 0 / " "/ 

// always give false statement 

var namef = false;
if(namef){
    console.log("Hi");
}
else{
    console.log("Sorry!");
}


// String concatenation 

var str ="hello" + "world";
console.log(str);


// Equality operators == vs ===

// here in below example  , logically we cannot compare two different data types 
if (5=="5"){
    console.log("yes");
}
else{
    console.log("no");
}

// use === in javascript , we only compare similar data types  
if (5==="5"){
    console.log("yes");
}
else{
    console.log("no");
}


// Switch statements 
var day = "monday";
switch(day){
    case "monday":
        console.log("It's Monday! Have a green day.");
        break;
        case "tuesday":
            console.log("Tuesday");
            break;
            default:
                console.log("sorry! Have a good day");
}

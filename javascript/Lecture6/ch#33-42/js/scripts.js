//recap date
var today = new Date();
var today_time = today.getTime();
console.log(today_time);

//Birthday
var Birthday = new Date("November 10, 1997");
var Birthday_time = Birthday.getTime();
console.log(Birthday_time);

//difference
var diff = today_time - Birthday_time;
console.log(diff);

var diff_In_Days = diff / (1000 * 60 * 60 * 24);
console.log(diff_In_Days);
//round days
console.log(Math.floor(diff_In_Days));


//you can specifiy time as well.
var d = new Date("July 21, 1983 13:25:00");

//aleternative for setting own date

var d = new Date();
console.log("today" + d);
//setfullyear
 d.setFullYear(2001);
 console.log("change year -" + d);
 //setMonth
 d.setMonth(11);
 console.log("change month -" + d);
 d.setDate(15);
 console.log("new date -" + d);
 d.setHours(13);
 console.log("hour -" + d);
 d.setMinutes(05);
 console.log("min -" + d);
 d.setSeconds(55);
 d.setMilliseconds(867);
 console.log("mm -" + d);



 //funcations syntax
 function name(params) {
     
 }
 
 //passing data to functions
// function add(num1,num2) {

//     alert(num1+num2);

// }
// add(2,3);



//return data from functions

function add(num1,num2) {

    return num1 + num2;

}
var result = add(2,3);
alert(result);


//Local vs. global variables

{
    //loacl in block
}

var name = "naveed";

function change_name() {

    var name = "asif";

}

change_name();
console.log(name);

//if statement
var day = prompt("enter day!");

if(day === "mon"){
    console.log("today is mon");
}
else if(day === "sun"){
    console.log("today is sun");
}
else if(day === "sat"){
    console.log("today is sat");
}
else
{
    console.log("please enter valid day");
}


//alternative of if else switch statement
// var day = prompt("enter day!");

switch (day) {
    case "mon":
    console.log("today is mon");
        break;
    case "sun":
    console.log("today is sun");
    case "sat":
    console.log("today is sat");
    default:
    console.log("please enter valid day");
    
}

//remember for loop

for (var index = 0; index < 5; index++) {
    console.log("for loop" + index);  
}

//alternative while loop

var index = 0
while (index < 5 ) {
    console.log("while loop" + index); 
    index++;
}


//alternative do while loop
var index = 0
do {
    console.log("while loop" + index); 
    index++;
} while (index < 5);



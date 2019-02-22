
//Round A Number
var num = 1.5;
num = Math.round(num);
console.log(num);

num = 1.3;
num = Math.round(num);
console.log(num);

num = 1.1;
num = Math.ceil(num);
console.log(num);

num = 1.9;
num = Math.floor(num);
console.log(num);


//Generating random numbers

var bigDecimal = Math.random();
console.log(bigDecimal);

//generate random no. from 1 to 6;
var improvedNum = (bigDecimal * 6);
console.log(improvedNum);
//but over need is 1 to 6 not 0 to 5.
improvedNum = (bigDecimal * 6) + 1;
console.log(improvedNum);

var numberOfStars = Math.floor(improvedNum)
console.log(numberOfStars);


//type casting, i want to add 200 inot 150.
var num1 = "200";
var result =  num1 + 150;
//output?

num1 = parseInt(num1);
result =  num1 + 150;
//output?

var myInteger = parseInt("1.9999");
console.log(myInteger);

var myFractional = parseFloat("1.9999")
console.log(myFractional);

//alternative
var integerString = "24"
var num = Number(integerString);
console.log(num);

var floatingNumString = "24.9876";
var num = Number(floatingNumString)
console.log(num);

//converting number to string

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
console.log(numberAsString);

//Tofixed
var total = 10.151875;
var prettyTotal = total.toFixed(2);
console.log(prettyTotal);

//date

var rightNow = new Date();
console.log(rightNow);

var theDay = rightNow.getDay();
console.log(theDay);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);


var d = new Date();
var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds()
var currMills = d.getMilliseconds();
var millsSince = d.getTime();









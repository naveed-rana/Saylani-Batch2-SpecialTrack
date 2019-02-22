
//Array concept
var city0 = "Islamabad";
var city1 = "Karachi";
var city2 = "Lahore";
var city3 = "Peshawar";
var city4 = "Queta";

var cities = [ "Islamabad", "Karachi", "Lahore", "Peshawar", "Queta" ];


// //geting value from array
// var city = cities[3];
// console.log(city);



// //asign a value to the array index
// cities[3] = "gujranwalla";



// //updated value
// var city = cities[3];
// console.log(city);



// //asign a value to the array index
// cities[6] = "some";
// console.log(cities);



// //add value into missing 5th index
// cities[5] = "5th";
// console.log(cities);




// //what is the value of cities[15]?

// //.................................six Usefull Array Funcations...........................//

// //pop()
// cities.pop();
// console.log(cities);



// //one more
// cities.pop();
// console.log(cities);



// //push()
// cities.push("new item with push","one more push");
// console.log(cities);



// //shift()
// cities.shift();
// console.log(cities);



// //unshift()
// cities.unshift("item with unshift");
// console.log(cities);



// //splice()
// cities.splice(2,0,"3rd index","4th index");
// console.log(cities);



// //splice()
// cities.splice(2,2,"3rd index","4th index");
// console.log(cities);



// //splice()
// cities.splice(3,1);
// console.log(cities);


// //splice()
// //cities.splice(2);
// console.log(cities);


// //slice()

// var sliceArr = cities.slice(1,3);
// console.log(sliceArr);

// //................................Loop concepts.........//

// alert("need to display same alert 5 times");
// alert("need to display same alert 5 times");
// alert("need to display same alert 5 times");
// alert("need to display same alert 5 times");
// alert("need to display same alert 5 times");

// //loop save save us!

// for (let index = 0; index < 5; index++) {
//     alert("display same alert 5 times,with single line of code using loop intead of 5 raw lines ");
// }

//loop in array
//geting array length

console.log(cities.length);

for (let index = 0; index < cities.length; index++) {
     console.log("city from index "+index+ "="+ cities[index]);
}

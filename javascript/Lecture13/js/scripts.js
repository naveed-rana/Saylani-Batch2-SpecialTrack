
// local storage

// localStorage.setItem("lastname", "Smith");


// localStorage.lastname="Asif";

// var lastname = localStorage.getItem("lastname");
// console.log(lastname);

// localStorage.removeItem("lastname");


// example

var countries = [
    {
   name:"pakistan",
   province:5
},
{
    name:"India",
    province:50
 }

]

//JSON.stringify parse
console.log('countries',countries);
var result = JSON.stringify(countries);
console.log(result);
result = JSON.parse(result);
console.log(result);

// try {

//     localStorage.setItem("countries", JSON.stringify(countries));

// } catch (error) {

//     alert('Sorry! No Web Storage support..');
// }

var countries = JSON.parse(localStorage.getItem("countries"));
console.log(countries);


// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.


function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // expected output: 10
  
  console.log(multiply(5));
  // expected output: 5
  

  //anonymous function expression
var myFunction = function() {
    alert('anonymous function expression');
                       }
myFunction();

//another type of anonymous function Immediately Invokable Function Expression

(function() {
    alert('Immediately Invokable Function Expression');
})();

// Map
// filter() is used to skip unwanted elements of collection. map() is used to modify elements of collection.

// filter() expects that function to return Boolean value based on which element will be skipped or not. map() will expect that function to return an new collection element.

var agesArr = [2, 3, 4,4, 5, 6];
var doubleAges = agesArr.map((num)=> num * num);
console.log(doubleAges);

// filter recap
var newAges = agesArr.filter((num)=> num !== 4);
console.log(newAges);


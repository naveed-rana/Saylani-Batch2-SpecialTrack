// Nested Loops > Loop within a loop is called Nested loop
// Example Nested Loop

for (var i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
        
        console.log("Outer " + i + " Inner " + j);
        
    }
    
}

// working with array
//want to Concat every First name with ALi.
var firstNames = ["Rizwan ", "Umar ", "Zain ", "Hamza ", "Junair "];
var lastNames = ["Ali"];

var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
 for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);
 }
 }
 console.log(fullNames);




 //changing case
//toLowerCase
 var string = "PAKISTAN ZINDABAD";
 var changeInToSmallCase  = string.toLowerCase();
 console.log(changeInToSmallCase);
 

//toUpperCase
 var string = "pakistan zindabad";
 var changeInToSmallCase  = string.toLocaleUpperCase();
 console.log(changeInToSmallCase);
 
 //useCase of changing case
//  var cityToCheck = prompt("Enter your city");
//      cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["lahore", "karachi", "faisalabad", "gujranwalla"];
 
//  for (var i = 0; i <= cleanestCities.length; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
//  }




 //string slicing
//recap slicing ? anybody

var string = "pakistan zindabad";
var copyString = string.slice(0,4);
console.log(copyString);



//slice() with single perameter
var string = "pakistan zindabad";
var copyString = string.slice(4);
console.log(copyString);



 //string length
//recap array length ? anybody

var stringLength = "pakistan zindabad";
var totalChar = stringLength.length;
console.log(totalChar);


//usecase
var month = prompt("Enter a month");
 var charsInMonth = month.length;
 if (charsInMonth > 3) {
 monthAbbrev = month.slice(0, 3);

 console.log(monthAbbrev);
 
 }

//replace world war ii with the Second World War  
 var text = "The code loops through the string looking for World War II Line 2 progresses through"
 for (var i = 0; i < text.length; i++) {

    if (text.slice(i, i + 12) === "World War II") {

    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    
     }
     }
  console.log(text);


  //alternative way
  // index of if find return first letter otherwise return -1.
  var text = "The w code loops through the string looking for World War II Line 2 progresses through";
  var firstChar = text.indexOf("World War II");
  console.log(firstChar);

  if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
    
    }
    console.log(text);

    //best way to replace string
   text = "The w code loops through the string looking for World War II Line 2 progresses through World War II"; 
   text = text.replace("World War II", "the Second World War");
    
   text = text.replace(/World War II/g, "the Second World War");
    //quiz! what is the value of segindex value?
   
    var text = "To be or not to be.";
    var segIndex = text.lastIndexOf("be");
    console.log(segIndex);



    //first char of string.
    var name = "Naveed";
    var firstChar = name.slice(0, 1)
    //alternative
    var firstChar = name.charAt(0);
    
    //last char
    var lastChar = name.charAt(name.length - 1);
    
    
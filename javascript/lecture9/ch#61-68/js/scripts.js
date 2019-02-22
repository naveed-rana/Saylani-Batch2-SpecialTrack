//Recap lecture

//<p>This is <em>important</em>!</p>

//every node that is enclosed by another node is the child of the node that encloses it.


var d = document.getElementById("div");
var p = d.getElementsByTagName("p");
var contents = p[1].innerHTML;

//If you wanted to read the contents of the last paragraph in the markup, you could write.

contents = p[2].innerHTML;

console.log(contents);


//Now I'll show you a new way to target the paragraph, by using the DOM organization chart.

var domLevel = document.childNodes[1].childNodes[2].childNodes[7].childNodes[3].parentNode;

console.log(domLevel);

//firstChild

//lastChild

//parentNode

//nextSibling

//previousSibling

//nodeType

//nodeName

//nodeValue

//hasAttribute
console.log(domLevel.hasAttribute('id'));


//getAttribute
console.log(domLevel.getAttribute('id'));


//setAttribute
domLevel.setAttribute("class","special");
console.log(domLevel);

//attributes
console.log(domLevel.attributes);

//createElement
var nodeToAdd = document.createElement("p");
nodeToAdd.setAttribute("class", "regular");


//createTextNode
var newTxt = document.createTextNode("Hello!");
nodeToAdd.appendChild(newTxt);

//example

var parentDiv = document.getElementById("div");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);
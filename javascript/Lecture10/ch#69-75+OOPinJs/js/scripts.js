//Object

var laptopObject = {
    id:12,
    model:'dell',
    os:'linex',
    ram:'8gb',
    ssd:'180gp'
}

console.log(laptopObject);

//set new value

laptopObject.os = "window";

console.log(laptopObject);


var gotTheProperty = "os" in laptopObject;

console.log(gotTheProperty);


// Example

var countries = [
    {
        name:'pakistan',
        flagColor:'green'
    }, 
    {
        name:'India',
        flagColor:'Saffron'
    }

]

var country = document.getElementById('countries');
var data = '';

//fetch
for (let index = 0; index < countries.length; index++) {

    data += '<tr>';
    data += '<td>' + countries[index].name + '</td>';
    data += '<td>' + countries[index].flagColor + '</td>';
    data += `<td><button onclick="editHandler('${countries[index].name}')">Edit</button></td>`;
    data += `<td><button onclick="deleteHandler('${countries[index].name}')">Delete</button></td>`;
    data += '</tr>';
}

country.innerHTML = data;



//add
function addItem() {
    
    var newname = document.getElementById('name').value;
    var newflag = document.getElementById('flag').value;

    var newCountry = {
         
        name:newname,
        flagColor:newflag
    }

    countries.push(newCountry);
    

   
        data += '<tr>';
        data += '<td>' + newname + '</td>';
        data += '<td>' + newflag + '</td>';
        data += `<td><button onclick="editHandler('${newname}')">Edit</button></td>`;
        data += `<td><button onclick="deleteHandler('${newflag}')">Delete</button></td>`;

    country.innerHTML = data;
    

}


// delete
function deleteHandler(countryname) {

  var updateCountries = countries.filter((country) => country.name !== countryname )
  
  countries = updateCountries;
  data = '';

  for (let index = 0; index < countries.length; index++) {
  
      data += '<tr>';
      data += '<td>' + countries[index].name + '</td>';
      data += '<td>' + countries[index].flagColor + '</td>';
      data += `<td><button onclick="editHandler('${countries[index].name}')">Edit</button></td>`;
      data += `<td><button onclick="deleteHandler('${countries[index].name}')">Delete</button></td>`;
      data += '</tr>';
  }
  
  country.innerHTML = data;
  
} 

function editHandler(countryname) {
    console.log(countryname);
    
    document.getElementById('spoiler').style.display = 'block';

    var getCountry = countries.filter((country) => country.name === countryname )
    console.log(getCountry);
    
    document.getElementById('edit-name').value = getCountry[0].name;
    document.getElementById('edit-flag').value = getCountry[0].flagColor;
    
    var updateCountries = countries.filter((country) => country.name !== countryname )

    countries = updateCountries;

 
}  


function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}


function saveEdit() {


    var newname = document.getElementById('edit-name').value;
    var newflag = document.getElementById('edit-flag').value;

    var newCountry = {
         
        name:newname,
        flagColor:newflag
    }

    countries.push(newCountry);
    

   
    data = '';

    for (let index = 0; index < countries.length; index++) {
    
        data += '<tr>';
        data += '<td>' + countries[index].name + '</td>';
        data += '<td>' + countries[index].flagColor + '</td>';
        data += `<td><button onclick="editHandler('${countries[index].name}')">Edit</button></td>`;
        data += `<td><button onclick="deleteHandler('${countries[index].name}')">Delete</button></td>`;
        data += '</tr>';
    }
    
    country.innerHTML = data;
    

}


// Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic. Historically, a program has been viewed as a logical procedure that takes input data, processes it, and produces output data.

//OOP es6

class Laptop {
   constructor (id,company,os,ram,ssd) {
       this.id  = id;
       this.company = company;
       this.os = os;
       this.ram = ram;
       this.ssd = ssd;
   }

   startLaptop(){
       console.log("from laptop"); 
   }
}

var laptop1 = new Laptop(1,'dell','linex','8gb','180gp');

var laptop2 = new Laptop(2,'hp','linex','8gb','180gp');

var laptop3 = new Laptop(3,'apple','linex','8gb','180gp');


laptop3.startLaptop();

console.log(laptop3);

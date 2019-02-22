

function onSubmitHandler(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;

    var result = "<b>Name:</b> " + name + "<br/>" + "<b>Email:</b> " + email + "<br/>" + "<b>City:</b> " + city + "<br/>" + "<b>Address:</b> " + address;
    document.getElementById("result").innerHTML = result;

}
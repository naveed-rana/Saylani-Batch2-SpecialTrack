//Recap lecture
//Targets Attributes





function onClickHandler() {
   
   var img = document.getElementById('afterImgId');
   console.log(img);

   FB.ui({
    method: 'feed',
    link: 'https://fentybeauty.com/pro-filtr/soft-matte-longwear-foundation/FB30006.html?dwvar_FB30006_color=FB0420'
  }, function(response){});

   //targets attributes
//    img.width = 200;

//    img.height = 400;

//    img.style.padding = "15px";
    
//    img.src = "some"

//    img.alt = "some new text from js";
   

}


//Target Element by tag name

var ptags = document.getElementsByTagName("p");
console.log(ptags);
console.log(ptags[0]);

ptags[0].style.color='red';
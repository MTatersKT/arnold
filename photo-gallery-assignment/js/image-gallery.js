// JavaScript Document//
document.queryselector

function selectimage(galleryimage)
{ //This will select from the image array to set as largeImage//
  document.getElementById("demo").innerHTML = galleryimage.id; //test output only can be removed.
  theimage  = document.getElementById("largeImage"); //declare the "LargeImage" variable to the local "theimage" variable.

  if (galleryimage.id = "img1"){ //test if the id of the passed on object from the mousdown event is equale to "img1"
      theimage.src = galleryimage.src ; //if they are equal set the "theimage" source URL to the same as the source of the passed "galleryimage"
      document.getElementById("hover").innerHTML = galleryimage.src; //troubleshooting output can be removed
    }
  else if (galleryimage.id = "img2") { //repeat the above code but in an else if statement only neededing to update the "img*" value to what image you woudl liek to show.
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = theimage.src;
  }
  else if (galleryimage.id = "img3") {
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = theimage.src;
  }
  else if (galleryimage.id = "img4") {
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = theimage.src;
  }
  else if (galleryimage.id = "img5") {
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = theimage.src;
  }
}

function selectimageSwitch(galleryimage) //this is the same as the above function but using the switch and case function
{ //This will select from the image array to set as largeImage//
  document.getElementById("demo").innerHTML = galleryimage.id;
  theimage  = document.getElementById("largeImage");

  switch(galleryimage.id) {
  case "img1": //this is the "if part of thes statement"
    theimage.src = galleryimage.src ; ///the lines between the case and the break will be executed upon matching the case statement.
    document.getElementById("hover").innerHTML = galleryimage.src;
    break; //breaks out of the swtich statement, meaning only 1 case will execute per switch
  case "img2":
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = galleryimage.src;
    break;
  case "img3":
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = galleryimage.src;
    break;
  case "img4":
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = galleryimage.src;
    break;
  case "img5":
    theimage.src = galleryimage.src ;
    document.getElementById("hover").innerHTML = galleryimage.src;
    break;
  default:
    break;
  }

}

function hoverimage(galleryimage)   //This will display the caption//
{


}

function borderColor(thumbnails)
{
   //This will modify border color on click
  document.getElementById("thumbnails").style.borderColor = "red";
}

var imgArray = new Array(
    //I thought I might be able to use an array as an alternative to pull from all the images//
  'img1.png',
  'img2.png',
  'img3.png',
  'img4.png',
  'img5.png'
);

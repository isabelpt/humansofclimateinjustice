console.log("HEYYYYYYY");

var myIndex = 0; 
carousel(); 
var x= document.getElementsByClassName("slideshow-images"); 

function carousel(){
 
  for (var i = 0; i<x.length; i++)
  {
    x[i].style.display="none";
  }
  myIndex++;
 if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds


}
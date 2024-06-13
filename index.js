document.getElementById("gfg").addEventListener("click",GFGfun);
function GFGfun(){
    document.getElementById("gfg").innerHTML = "PhoneNo.:7007891219\nemail:singhsiddhartha220@gmail.com";
    document.getElementById("gfg").style.color='black';
    document.getElementById("gfg").style.background = 'azure';
}

document.addEventListener("click", function(event) {
    // Get the clicked element
    const clickedElement = event.target;
  
    // Check if the clicked element is NOT the element with ID "gfg"
    if (clickedElement.id !== "gfg") {
      // Remove the displayed details from "gfg" element if clicked elsewhere
      const element = document.getElementById("gfg");
      if (element) {
        element.innerHTML = "Contact";  // Clear innerHTML to remove displayed text
        element.style.color = '';  // Reset color to default
        element.style.background = ''; // Reset background to default
      }
    }
  });

  document.getElementById("abt").addEventListener("click",about);
  function about(){
    document.getElementById("abt").innerHTML = "Stream:Engineering\nBranch:CSE\nCollege:VITB";
    document.getElementById("abt").style.color = 'black';
    document.getElementById("abt").style.background = 'violet';
  }

document.addEventListener("click", function(event) {
    // Get the clicked element
    const clickedElement = event.target;
  
    // Check if the clicked element is NOT the element with ID "gfg"
    if (clickedElement.id !== "abt") {
      // Remove the displayed details from "gfg" element if clicked elsewhere
      const element = document.getElementById("abt");
      if (element) {
        element.innerHTML = "About";  // Clear innerHTML to remove displayed text
        element.style.color = '';  // Reset color to default
        element.style.background = ''; // Reset background to default
      }
    }
  });

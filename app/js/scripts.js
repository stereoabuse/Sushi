
// Appends a google maps iframe ... however there is a bug that blocks
// var mapLink = document.querySelector(".map");

// mapLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("It works!");
//     var iframe = document.createElement("iframe");
//     iframe.style.display = 'width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">';
//     iframe.src =  ("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.8218594120603!2d-73.974922684596!3d40.67789387933563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1644340608127!5m2!1sen!2sus");

//   var newIframe = document.querySelector(".map");

//   newIframe.append(iframe);

// });



function myFunction() {
  var x = document.getElementById("popupmap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
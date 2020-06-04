var slideIndex = 0;
carousel();

function carousel() {
  var j;
  var y = document.getElementsByClassName("slides");
  for (j = 0; j < x.length; j++) {
    y[j].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > y.length) {slideIndex = 1}
  y[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
document.addEventListener('DOMContentLoaded', function() {
	
showSlides(slideIndex);

// Next/previous controls

});

var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  console.log(slides)
  slides[slideIndex-1].style.display = "block";
}

function toggleEllipsis() {
	var element = document.querySelector("#ellipsis-ex");
	element.classList.toggle("text-desc");
}
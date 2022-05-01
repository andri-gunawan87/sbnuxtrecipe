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

function like_counter(id)  {
		fetch('like/'+`${id}`)
			.then(response => response.json())
			.then(post => {
				console.log(post.like);
				let counter = post.like
				document.querySelector('#like_'+`${id}`).innerHTML = counter + 1;				
				document.querySelector(".like").className = 'btn btn-primary active like';
				document.querySelector(".like").disabled = true;
				document.querySelector(".dislike").disabled = false;
				document.querySelector(".dislike").className = 'btn btn-outline-danger dislike';
			})
			
	};
	
function dislike_counter(id)  {
	fetch('like/'+`${id}`)
		.then(response => response.json())
		.then(post => {
			console.log(post.like);
			let counter = post.like
			document.querySelector('#like_'+`${id}`).innerHTML = counter - 1;
			document.querySelector(".dislike").className = 'btn btn-danger active dislike';
			document.querySelector(".dislike").disabled = true;
			document.querySelector(".like").disabled = false;
			document.querySelector(".like").className = 'btn btn-outline-primary like';
			})
		};

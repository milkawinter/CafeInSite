document.addEventListener("DOMContentLoaded", function(event) {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    } else {
      slideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  // Show slide 1 initially
  showSlides(1);

  // Attach event listeners to thumbnails
  let thumbnails = document.getElementsByClassName("demo");
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
      currentSlide(i + 1);
    });
  }

  // Attach event listeners to previous and next buttons
  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");
  prevButton.addEventListener("click", function() {
    plusSlides(-1);
  });
  nextButton.addEventListener("click", function() {
    plusSlides(1);
  });
});
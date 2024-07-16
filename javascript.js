

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let slideIndex = 1;
let slideTimeout;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dotsContainer = document.getElementById("dot-container");
  dotsContainer.innerHTML = "";
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i + 1);
    dot.addEventListener("click", function () {
      slideIndex = parseInt(this.getAttribute("data-index"));
      clearTimeout(slideTimeout);
      showSlides();
    });
    dotsContainer.appendChild(dot);
  }
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideTimeout = setTimeout(function () {
    slideIndex++;
    showSlides();
  }, 5000);
}

function plusSlides(n) {
  slideIndex += n;
  clearTimeout(slideTimeout);
  showSlides();
}

showSlides();

document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.fade-in');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(function (section) {
    observer.observe(section);
  });
});


// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slides");
  let progressBar = document.querySelector(".progress-bar");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");

  // Update progress bar
  let progressWidth = (slideIndex / slides.length) * 100 + "%";
  progressBar.style.width = progressWidth;

  setTimeout(showSlides, 4000);
}

// about me
function scrollToAbout() {
  event.preventDefault();

  var aboutSection = document.getElementById("tentangku");
  var aboutSectionOffset = aboutSection.offsetTop;

  window.scrollTo({
    top: aboutSectionOffset,
    behavior: "smooth",
  });
}

AOS.init({
  easing: "ease-in-out",
});

// menu button
document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdownMenu = dropdownToggle.nextElementSibling;

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.querySelectorAll(".dropdown-toggle");

  dropdownToggle.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      var dropdownMenu = this.nextElementSibling;
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      } else {
        document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
          menu.classList.remove("show");
        });
        dropdownMenu.classList.add("show");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
        menu.classList.remove("show");
      });
    }
  });
});

// about
window.addEventListener("scroll", function () {
  var aboutSection = document.getElementById("tentangku");
  var rect = aboutSection.getBoundingClientRect();
  var viewportHeight = window.innerHeight;

  if (rect.top >= 0 && rect.bottom <= viewportHeight) {
    aboutSection.classList.add("active");
  } else {
    aboutSection.classList.remove("active");
  }
});

// grid photo
function showPreview() {
  var modal = document.getElementById("previewModal");
  var img = document.querySelector(".img img");
  var modalImg = document.getElementById("imgPreview");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src; // Assuming img.src contains the path to the image
  captionText.innerHTML = "Preview Image"; // You can customize this caption
}

function closePreview() {
  var modal = document.getElementById("previewModal");
  modal.style.display = "none";
}

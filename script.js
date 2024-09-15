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

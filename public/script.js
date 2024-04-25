const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const posisiNav = header.offsetTop;

  if (window.scrollY > posisiNav) {
    header.classList.add("navbar-fixed");

    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("navbar-fixed");

    header.classList.add("bg-transparent");
  }
};

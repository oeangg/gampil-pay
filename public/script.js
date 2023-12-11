const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");
  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "img/hamburger-menu.svg";
  const iconName = isBurger ? "img/close-icon.svg" : "img/hamburger-menu.svg";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
    navigation.classList.add("navigation-mobile-effect");
    setTimeout(() => {
      navigation.classList.toggle("navigation-mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation-mobile-effect");
    navigation.classList.toggle("navigation-mobile");
  }
};

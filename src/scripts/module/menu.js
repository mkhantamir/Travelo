const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".menu__hamburger");

export const menuEvent = document
  .querySelector(".menu__hamburger")
  .addEventListener("click", () => event());

const event = () => {
  menu.classList.toggle("menu--close");
  hamburger.classList.toggle("menu__hamburger--closeX");
};

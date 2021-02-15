const searchButton = document.querySelector(".nav__search");
const searchSection = document.querySelector(".search");
const searchBackground = document.querySelector(".search__background");

export const searchOpen = () => {
  searchButton.addEventListener("click", function () {
    searchSection.classList.remove("search--close");
  });
};
export const searchClose = () => {
  searchBackground.addEventListener("click", function () {
    searchSection.classList.add("search--close");
  });
};

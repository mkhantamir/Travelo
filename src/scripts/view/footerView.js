export const spliceFooter = (wonders) => {
  wonders.forEach(renderFooter);
};

const renderFooter = (images) => {
  const html = `
    <img src="./img/${images.image}" class="footer__image" alt="${images.name}">
    `;

  document
    .querySelector(".footer__instagram")
    .insertAdjacentHTML("beforeend", html);
};

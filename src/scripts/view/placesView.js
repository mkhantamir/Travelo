export const splicePlaces = (wonders) => {
  wonders.forEach(renderPlaces);
};

const renderPlaces = (places) => {
  const html = `
  <div class="places__item">
    <img src="../../img/${places.image}" alt="${places.name}" />
    <div class="places__content">
      <h1 class="text--semi-small">${places.name}</h1>
      <p class="text--small">${places.country}</p>
      <div class="places__bottom">
        <div class="places__review">
          <div class="places__stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="text--small">(20 Сэтгэгдэл)</p>
        </div>
        <div class="places__time">
          <i class="fas fa-clock"></i>
          <p class="text--small">5 Өдөр</p>
        </div>
      </div>
    </div>
  </div>
  `;

  document
    .querySelector(".places__images")
    .insertAdjacentHTML("beforeend", html);
};

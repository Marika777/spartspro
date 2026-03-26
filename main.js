function renderProducts() {
  const grid = document.querySelector("#js-product-grid");
  if (!grid) return;

  const limit = window.innerWidth <= 576 ? 4 : productsData.length;
  const itemsToShow = productsData.slice(0, limit);

  const cardsHtml = itemsToShow.map(item => `
    <article class="product-card">
      <div class="product-card__side">
        <img src="${item.img}" alt="${item.name}" class="product-card__image">
      </div>

      <div class="product-card__info">
        <h3 class="product-card__title">${item.name}</h3>
        <div class="product-card__status product-card__status--${item.type}">
          ${item.type === "in-stock" ? `В наличии ${item.stock} м.` : "Под заказ"}
        </>
      </div>
      <div class="product-card__actions">
          <a href="product.html?id=${item.id}" class="button button--theme-dark">Подробнее</a>
      </div>
    </article>
  `).join("");

  grid.innerHTML = cardsHtml;
}

const renderFeatures = () => {
  const featuresList = document.querySelector("#js-features-list");
  if (!featuresList) return;

  const featuresHtml = featuresData.map(text => `
    <li class="features__item">${text}</li>
  `).join("");

  featuresList.innerHTML = featuresHtml;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderFeatures();

  window.addEventListener("resize", () => {
      renderProducts();
  });

  const header = document.getElementById('js-header');
  const nav = document.getElementById('js-nav');
  const navList = document.getElementById('js-nav-list');
  const openBtn = document.getElementById('js-nav-open');
  const closeBtn = document.getElementById('js-nav-close');

  const toggleNav = () => {
    header.classList.toggle('header--open');
    nav.classList.toggle('nav--open');
    navList.classList.toggle('container');
    document.body.style.overflow = nav.classList.contains('nav--open') ? 'hidden' : '';
  };

  openBtn?.addEventListener('click', toggleNav);
  closeBtn?.addEventListener('click', toggleNav);
});
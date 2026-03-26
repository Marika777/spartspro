function initProductPage() {
    const container = document.querySelector("#js-product-page");
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = productsData.find(item => item.id === productId);

    if (!product) {
        container.innerHTML = "<h1>Товар не найден</h1>";
        return;
    }

    container.innerHTML = `
        <div class="product-details__wrapper">
            <div class="product-details__image">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-details__info">
                <h1 class="product-details__title">${product.name}</h1>
                <p class="product-details__status product-details__status--${product.type}">
                    ${product.type === 'in-stock' ? `В наличии: ${product.stock} м.` : 'Под заказ'}
                </p>
                <p class="product-details__description">
                    Описание характеристик лифтового оборудования для ID ${product.id}.
                </p>
                <button class="button button--theme-dark">Заказать консультацию</button>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", initProductPage);
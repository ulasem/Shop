import { refs } from './refs';

export function renderCategories(arrOfCategories) {
  const arrOfCategoriesAll = ['All', ...arrOfCategories];
  const markup = arrOfCategoriesAll
    .map(
      category => `
    <li class="categories__item">
         <button class="categories__btn" type="button">${category}</button>
    </li>`
    )
    .join('');

  return (refs.categoriesList.innerHTML = markup);
}

export function renderProducts(arrOfProducts) {
  const markup = arrOfProducts
    .map(
      ({ id, thumbnail, title, brand, category, price }) => `
    <li class="products__item" data-id="${id}">
        <img class="products__image" src="${thumbnail}" alt="${title}"/>
        <p class="products__title">${title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
        <p class="products__category">Category: ${category}</p>
        <p class="products__price">Price: ${price}$</p>
    </li>`
    )
    .join('');

  return refs.productsList.insertAdjacentHTML('beforeend', markup);
}

export function renderProduct({
  id,
  thumbnail,
  title,
  tags,
  price,
  description,
  shippingInformation,
  returnPolicy,
}) {
  const product = `<li data-id="${id}">
      <img class="modal-product__img" src="${thumbnail}" alt="${title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${tags.join(', ')}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
        <p class="modal-product__price">Price: ${price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
    </li>`;

  return (refs.modalProduct.innerHTML = product);
}

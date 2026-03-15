import { getProductByCategory, getProducts } from './products-api';
import { refs } from './refs';
import { renderProducts } from './render-function';

// export async function handleReadCategory(event) {
//   const textContent = event.target.textContent;

//   const result = await getProductByCategory(textContent);

//   renderProducts(result);
// }

export async function handleLoadMore(currentPage) {
  const products = await getProducts(currentPage);

  if (products.total - currentPage * 12 < 0) {
    refs.loadMoreBtn.classList.add('is-hidden');
  }

  renderProducts(products.products);
}

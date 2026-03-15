import { getProductByCategory, getProducts } from './products-api';
import { refs } from './refs';

export async function checkIfCategory(currentPage, category) {
  if (category === 'All') {
    return await getProducts(currentPage);
  }

  return await getProductByCategory(category, currentPage);
}

export function toggleLoadMoreBtn(products, state) {
  const loadedProducts = state.currentPage * 12;

  if (loadedProducts >= products.total) {
    refs.loadMoreBtn.classList.add('is-hidden');
  } else {
    refs.loadMoreBtn.classList.remove('is-hidden');
  }
}

export function toggleModal() {
  refs.modal.classList.toggle('modal--is-open');
}

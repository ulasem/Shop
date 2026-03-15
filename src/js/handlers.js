import { refs } from './refs';
import { renderProduct, renderProducts } from './render-function';
import { checkIfCategory, toggleLoadMoreBtn, toggleModal } from './helpers';
import { getProductById } from './products-api';

export async function handleLoadMore(state) {
  const result = await checkIfCategory(state.currentPage, state.category);
  console.log('handleloadMore', result);

  toggleLoadMoreBtn(result, state);

  renderProducts(result.products);
}

export async function handleFilterByCategory(event, state) {
  if (!event.target.classList.contains('categories__btn')) return;

  document
    .querySelectorAll('.categories__btn')
    .forEach(btn => btn.classList.remove('categories__btn--active'));

  event.target.classList.add('categories__btn--active');

  state.category = event.target.textContent;
  state.currentPage = 1;

  refs.productsList.innerHTML = '';

  const result = await checkIfCategory(state.currentPage, state.category);

  if (result.products.length === 0) {
    refs.notFound.classList.add('not-found--visible');
  } else {
    refs.notFound.classList.remove('not-found--visible');
  }

  toggleLoadMoreBtn(result, state);

  renderProducts(result.products);
}

export async function handleOpenModal(event) {
  const product = event.target.closest('.products__item');

  if (!product) return;

  const id = product.dataset.id;
  const fetchedProduct = await getProductById(id);

  renderProduct(fetchedProduct);

  toggleModal();
}

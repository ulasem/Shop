import { refs } from './refs';
import { renderProducts } from './render-function';
import { checkIfCategory, toggleLoadMoreBtn } from './helpers';

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

import { handleFilterByCategory, handleLoadMore } from './js/handlers';
import { toggleLoadMoreBtn } from './js/helpers';
import { getCategories, getProducts } from './js/products-api';
import { refs } from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';

//Логіка сторінки Home
const state = {
  currentPage: 1,
  category: 'All',
};

loadCategories();
loadProducts();

refs.loadMoreBtn.addEventListener('click', () => {
  state.currentPage += 1;
  handleLoadMore(state);
});

refs.categoriesList.addEventListener('click', event =>
  handleFilterByCategory(event, state)
);

async function loadCategories() {
  const categories = await getCategories();
  renderCategories(categories);
}

async function loadProducts() {
  const products = await getProducts(state.currentPage);

  toggleLoadMoreBtn(products, state);

  renderProducts(products.products);
}

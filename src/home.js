import { handleLoadMore } from './js/handlers';
import { getCategories, getProducts } from './js/products-api';
import { refs } from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';

//Логіка сторінки Home
let currentPage = 1;

loadCategories();
loadProducts();

refs.loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  handleLoadMore(currentPage);
});

async function loadCategories() {
  const categories = await getCategories();
  renderCategories(categories);
}

async function loadProducts() {
  const products = await getProducts(currentPage);

  if (products.total - currentPage * 12 > 0) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  }

  renderProducts(products.products);
}

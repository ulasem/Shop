import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from './constants';

axios.defaults.baseURL = API_BASE_URL;

export async function getCategories() {
  const responce = await axios.get(API_ENDPOINTS.CATEGORIES);
  return responce.data;
}

export async function getProducts(currentPage) {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
  };

  const responce = await axios.get(API_ENDPOINTS.PRODUCTS, { params });
  return responce.data;
}

export async function getProductById(id) {
  const responce = await axios.get(`${API_ENDPOINTS.PRODUCTS_BY_ID}${id}`);
  return responce.data;
}

export async function getProductByCategory(category) {
  const responce = await axios.get(
    `${API_ENDPOINTS.PRODUCTS_BY_CATEGORY}${category}`
  );
  return responce.data;
}

export async function getProductBySearch(product) {
  const params = {
    q: product,
  };

  const responce = await axios.get(API_ENDPOINTS.SEARCH, { params });
  return responce.data;
}

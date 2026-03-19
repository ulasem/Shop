import"./assets/styles-BKMNjh0f.js";import{a}from"./assets/vendor-2s9xPmg-.js";const c={modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),modalProduct:document.querySelector(".modal-product"),productsList:document.querySelector(".products"),categoriesList:document.querySelector(".categories"),loadMoreBtn:document.querySelector(".load-more-btn"),notFound:document.querySelector(".not-found")};function P(t){const e=["All",...t].map(r=>`
    <li class="categories__item">
         <button class="categories__btn" type="button">${r}</button>
    </li>`).join("");return c.categoriesList.innerHTML=e}function p(t){const o=t.map(({id:e,thumbnail:r,title:n,brand:i,category:l,price:u})=>`
    <li class="products__item" data-id="${e}">
        <img class="products__image" src="${r}" alt="${n}"/>
        <p class="products__title">${n}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand: ${i}</span></p>
        <p class="products__category">Category: ${l}</p>
        <p class="products__price">Price: ${u}$</p>
    </li>`).join("");return c.productsList.insertAdjacentHTML("beforeend",o)}function L({id:t,thumbnail:o,title:e,tags:r,price:n,description:i,shippingInformation:l,returnPolicy:u}){const f=`<div data-id="${t}">
      <img class="modal-product__img" src="${o}" alt="${e}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${e}</p>
        <ul class="modal-product__tags">${r.join(", ")}</ul>
        <p class="modal-product__description">${i}</p>
        <p class="modal-product__shipping-information">Shipping: ${l}</p>
        <p class="modal-product__return-policy">Return Policy: ${u}</p>
        <p class="modal-product__price">Price: ${n} $</p>
        <button class="modal-product__btn modal-product__buy-btn" type="button">Buy</button>
      </div>
    </div>`;return c.modalProduct.innerHTML=f}const b="https://dummyjson.com",d={CATEGORIES:"/products/category-list",PRODUCTS:"/products",PRODUCTS_BY_ID:"/products/",PRODUCTS_BY_CATEGORY:"/products/category/",SEARCH:"/products/search"};a.defaults.baseURL=b;async function C(){return(await a.get(d.CATEGORIES)).data}async function g(t){const o={limit:12,skip:(t-1)*12};return(await a.get(d.PRODUCTS,{params:o})).data}async function $(t){return(await a.get(`${d.PRODUCTS_BY_ID}${t}`)).data}async function S(t,o){const e={limit:12,skip:(o-1)*12};return(await a.get(`${d.PRODUCTS_BY_CATEGORY}${t}`,{params:e})).data}async function m(t,o){return o==="All"?await g(t):await S(o,t)}function _(t,o){o.currentPage*12>=t.total?c.loadMoreBtn.classList.add("is-hidden"):c.loadMoreBtn.classList.remove("is-hidden")}function y(){c.modal.classList.toggle("modal--is-open")}async function B(t){const o=await m(t.currentPage,t.category);console.log("handleloadMore",o),_(o,t),p(o.products)}async function A(t,o){if(!t.target.classList.contains("categories__btn"))return;document.querySelectorAll(".categories__btn").forEach(r=>r.classList.remove("categories__btn--active")),t.target.classList.add("categories__btn--active"),o.category=t.target.textContent,o.currentPage=1,c.productsList.innerHTML="";const e=await m(o.currentPage,o.category);e.products.length===0?c.notFound.classList.add("not-found--visible"):c.notFound.classList.remove("not-found--visible"),_(e,o),p(e.products)}async function T(t){const o=t.target.closest(".products__item");if(!o)return;const e=o.dataset.id,r=await $(e);L(r),y()}const s={currentPage:1,category:"All"};h();E();c.loadMoreBtn.addEventListener("click",()=>{s.currentPage+=1,B(s)});c.categoriesList.addEventListener("click",t=>A(t,s));c.productsList.addEventListener("click",T);c.modalCloseBtn.addEventListener("click",y);async function h(){const t=await C();P(t)}async function E(){const t=await g(s.currentPage);_(t,s),p(t.products)}
//# sourceMappingURL=index.js.map

import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-2s9xPmg-.js";const _="https://dummyjson.com",d={CATEGORIES:"/products/category-list",PRODUCTS:"/products",PRODUCTS_BY_ID:"/products/",PRODUCTS_BY_CATEGORY:"/products/category/",SEARCH:"/products/search"};a.defaults.baseURL=_;async function g(){return(await a.get(d.CATEGORIES)).data}async function i(t){const o={limit:12,skip:(t-1)*12};return(await a.get(d.PRODUCTS,{params:o})).data}const e={modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),productsList:document.querySelector(".products"),categoriesList:document.querySelector(".categories"),loadMoreBtn:document.querySelector(".load-more-btn")};function f(t){const s=["All",...t].map(c=>`
    <li class="categories__item">
         <button class="categories__btn" type="button">${c}</button>
    </li>`).join("");return e.categoriesList.insertAdjacentHTML("beforeend",s)}function u(t){const o=t.map(({id:s,thumbnail:c,title:n,brand:l,category:p,price:m})=>`
    <li class="products__item" data-id="${s}">
        <img class="products__image" src="${c}" alt="${n}"/>
        <p class="products__title">${n}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand: ${l}</span></p>
        <p class="products__category">Category: ${p}</p>
        <p class="products__price">Price: ${m}$</p>
    </li>`).join("");return e.productsList.insertAdjacentHTML("beforeend",o)}async function y(t){const o=await i(t);o.total-t*12<0&&e.loadMoreBtn.classList.add("is-hidden"),u(o.products)}let r=1;C();S();e.loadMoreBtn.addEventListener("click",()=>{r+=1,y(r)});async function C(){const t=await g();f(t)}async function S(){const t=await i(r);t.total-r*12>0&&e.loadMoreBtn.classList.remove("is-hidden"),u(t.products)}
//# sourceMappingURL=index.js.map

import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const f="44822102-6d1d7649cda1a595bd957c97f";function d(r){const o=`https://pixabay.com/api/?key=${f}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(n=>{if(console.log(n),!n.ok)throw new Error(n.status);return n.json()})}function l(r){c.error({title:"Error",message:r,position:"topRight"})}function p(r){c.info({title:"Info",message:r,position:"topRight"})}function m(r){const o=document.querySelector(".gallery");o.innerHTML="";const n=r.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <div class="image-card">
                <img src="${e.webformatURL}" alt="${e.tags}">
                <div class="info">
                    <p>Likes: ${e.likes}</p>
                    <p>Views: ${e.views}</p>
                    <p>Comments: ${e.comments}</p>
                    <p>Downloads: ${e.downloads}</p>
                </div>
            </div>
        </a>
    `).join("");o.innerHTML=n}const a=document.getElementById("loading"),y=document.querySelector(".gallery"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".search-form");g.addEventListener("submit",L);function L(r){r.preventDefault();const o=r.currentTarget,n=o.elements.query.value;if(!n){l("Please enter something!");return}y.innerHTML="",a.style.display="block",d(n).then(e=>{e.hits.length===0?p("Sorry, there are no images matching your search query. Please try again!"):(m(e.hits),h.refresh())}).catch(e=>{console.log(e),l("An error occurred while fetching images. Please try again later.")}).finally(()=>{a.style.display="none",o.reset()})}
//# sourceMappingURL=commonHelpers.js.map

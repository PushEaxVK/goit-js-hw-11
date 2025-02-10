import{a as c,S as u,i as d}from"./assets/vendor-DH2CaQaJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m="48710632-74e9a639a0cf21f0899e63b1f",f="https://pixabay.com/api/";function p(e){const o={key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:"false"};return c.get(f,{params:o}).then(r=>r.data.hits).catch(r=>{console.log(r)})}const h=new u(".gallery-list a"),n=e=>{d.error({message:e,position:"topRight",maxWidth:432})};function g(e,o){const r=y(o);e.innerHTML=r,h.refresh()}function y(e){return e.map(v).join("")}function v(e){return console.log(e),`<li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
              <img
                class="card-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                data-source="${e.largeImageURL}"
              />
              <div class="card-texts">
                <div class="card-text-element likes">
                  <p class="element-title">Likes</p>
                  <p class="element-value">${e.likes}</p>
                </div>
                <div class="card-text-element views">
                  <p class="element-title">Views</p>
                  <p class="element-value">${e.views}</p>
                </div>
                <div class="card-text-element comments">
                  <p class="element-title">Comments</p>
                  <p class="element-value">${e.comments}</p>
                </div>
                <div class="card-text-element downloads">
                  <p class="element-title">Downloads</p>
                  <p class="element-value">${e.downloads}</p>
                </div>
              </div>
            </a>
          </li>`}const i={form:document.querySelector(".form"),input:document.querySelector(".form-input"),button:document.querySelector(".form-button"),gallery:document.querySelector(".gallery-list")};i.form.addEventListener("submit",L);function L(e){e.preventDefault();const o=e.currentTarget.elements.search.value.trim();if(!o){n("Enter some value");return}p(o).then(r=>{r.length===0?n("Sorry, there are no images matching your search query. Please try again!"):g(i.gallery,r)}).catch(r=>{n("Sorry, something went wrong. Please try again!")})}
//# sourceMappingURL=index.js.map

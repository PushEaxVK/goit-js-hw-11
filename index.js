import{a as i,i as u}from"./assets/vendor-CgCjRtln.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const d="48710632-74e9a639a0cf21f0899e63b1f",m="https://pixabay.com/api/";function p(e){const o={key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:"false"};return i.get(m,{params:o}).then(r=>r.data.hits).catch(r=>{console.log(r)})}const l=e=>{u.error({message:e,position:"topRight",maxWidth:432})};function f(e,o){const r=h(o);e.innerHTML=r}function h(e){return e.map(y).join("")}function y(e){return console.log(e),`<li class="gallery-item">
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
            </li>`}const c={form:document.querySelector(".form"),input:document.querySelector(".form-input"),button:document.querySelector(".form-button"),gallery:document.querySelector(".gallery-list")};c.form.addEventListener("submit",g);function g(e){e.preventDefault();const o=e.currentTarget.elements.search.value.trim();if(!o){l("Enter some value");return}p(o).then(r=>{r.length===0?l("Sorry, there are no images matching your search query. Please try again!"):f(c.gallery,r)}).catch(r=>{l("Sorry, something went wrong. Please try again!")})}
//# sourceMappingURL=index.js.map

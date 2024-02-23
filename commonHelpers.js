import{S as m,i as f}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(n){return n.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:s,downloads:a})=>`<li class="main-image">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${o}"/>
  </a>
  <ul class="img-reactions">
  
  <li class="reactions">
  <h3>Likes</h3>
  <p>${e}</p>
  </li>

   <li class="reactions">
  <h3>Views</h3>
  <p>${t}</p>
  </li>

   <li class="reactions">
  <h3>Comments</h3>
  <p>${s}</p>
  </li>

   <li class="reactions">
  <h3>Downloads</h3>
  <p>${a}</p>
  </li>

  </ul>
</li>`).join("")}function p(n){const i="42523874-92f67aed3babfb2c9b36364a5",r="https://pixabay.com/api/",o=n.trim(),a=`${r}?key=${i}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a).then(c=>{if(!c.ok)throw new Error(c.status);return c.json()})}const u=document.querySelector(".gallery"),l=document.querySelector(".input-img"),h=document.querySelector(".form");document.querySelector(".btn-sub");function d(n){if(n.preventDefault(),!l.value.trim())return b();p(l.value).then(r=>{const o=r.hits;if(o.length)u.innerHTML=g(o),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh();else return u.innerHTML="",y()}).catch(r=>console.log(r)),l.value=""}h.addEventListener("submit",d);function y(){f.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function b(){f.warning({title:"Увага!",position:"topRight",backgroundColor:"orange",message:"Поле пошуку не може бути порожнім!"})}
//# sourceMappingURL=commonHelpers.js.map

import{S as m,i as g}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(n){return n.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:s,downloads:a})=>`<li class="main-image">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${i}"/>
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
</li>`).join("")}function d(n){const o="42523874-92f67aed3babfb2c9b36364a5",r="https://pixabay.com/api/",i=n.trim(),a=`${r}?key=${o}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}const u=document.querySelector(".gallery"),f=document.querySelector(".input-img"),y=document.querySelector(".form");document.querySelector(".btn-sub");const c=document.querySelector(".loading");c.style.display="none";function h(n){n.preventDefault();const o=f.value.trim();if(!o)return $();c.style.display="inline-block",d(o).then(r=>{const i=r.hits;if(i.length)u.innerHTML=p(i),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh();else return u.innerHTML="",b()}).catch(r=>console.log(r)).finally(()=>{c.style.display="none"}),f.value=""}y.addEventListener("submit",h);function b(){g.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function $(){g.warning({title:"Увага!",position:"topRight",backgroundColor:"orange",message:"Поле пошуку не може бути порожнім!"})}
//# sourceMappingURL=commonHelpers.js.map

import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=s=>{const t="https://pixabay.com",o="43337272-ad726c9b9e29498af38112cb0",a=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",key:o});return fetch(`${t}/api/?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},f=s=>s.map(t=>`
      <div class="card-wrapper">
  <li class="gallery-card">
    <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img"/></a>
    <div class="gallery-panel">
      <p>Likes ${t.likes}</p>
      <p>Views ${t.views}</p>
      <p>Comments ${t.comments}</p>
      <p>Downloads ${t.downloads}</p>
    </div>
  </li>
</div>
    `).join(""),u=document.querySelector(".js-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",h);function h(s){s.preventDefault();const t=s.target.elements.search.value.trim();if(c.innerHTML="",t==="")return n.error({message:"The input field must not be empty!",position:"topRight"});l.classList.remove("is-hidden"),p(t).then(o=>{if(o.hits.length===0)return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});c.innerHTML=f(o.hits),m.refresh()}).catch(o=>{console.log(o)}).finally(()=>{l.classList.add("is-hidden"),u.reset()})}
//# sourceMappingURL=commonHelpers.js.map

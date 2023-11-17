const l=document.getElementById("theme-switch"),o=document.body;l.addEventListener("click",A);document.addEventListener("DOMContentLoaded",d);const s="swicher";function A(){if(l.checked){o.classList.replace("theme-light","theme-dark"),localStorage.setItem(s,"theme-dark");return}o.classList.replace("theme-dark","theme-light"),localStorage.setItem(s,"theme-light")}function d(){if(localStorage.getItem(s)==="theme-dark"){o.classList.replace("theme-light","theme-dark"),l.checked=!0;return}o.classList.replace("theme-dark","theme-light")}(()=>{const e={openMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t);function t(){e.mobileMenu.classList.toggle("is-active")?(e.closeMenuBtn.classList.add("active"),e.openMenuBtn.classList.add("hidden"),document.body.style.overflow="hidden"):(e.closeMenuBtn.classList.remove("active"),e.openMenuBtn.classList.remove("hidden"),document.body.style.overflow="")}})();const H="/js-92-Smart-Foxes-Bookshelf/amazon.png",f="/js-92-Smart-Foxes-Bookshelf/books.png",Q="/js-92-Smart-Foxes-Bookshelf/assets/sprite-c358ff04.svg",g="/js-92-Smart-Foxes-Bookshelf/assets/save_the_children-951cc408.png",u="/js-92-Smart-Foxes-Bookshelf/assets/hope-3fe8ec28.png",m="/js-92-Smart-Foxes-Bookshelf/assets/international_medical-18bc29d8.png",B="data:image/png;base64,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",h="/js-92-Smart-Foxes-Bookshelf/assets/action_against_hunger-3e3398e6.png",w="/js-92-Smart-Foxes-Bookshelf/assets/sergiy_prytula-6e4a8759.png",S="/js-92-Smart-Foxes-Bookshelf/assets/medical-9ca4e823.png",p="/js-92-Smart-Foxes-Bookshelf/assets/world_vision-654cf8a2.png",E="data:image/png;base64,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",n=document.querySelector(".expand-btn"),r=document.querySelector(".list"),i=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:g,id:"01"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:u,id:"02"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:m,id:"03"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:B,id:"04"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:h,id:"05"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:w,id:"06"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:S,id:"07"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:p,id:"08"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:E,id:"09"}],k=()=>!!n.classList.contains("expanded"),a=e=>{r.innerHTML="",e.forEach(t=>{r.innerHTML+=`
      <div class="list-item">
        <span>${t.id}</span>
        <a href="${t.url}" class="list-item__image" target="_blank">
          <img class="number-icon" src="${t.img}" alt="${t.title}">
        </a>
      </div>
    `})};n.addEventListener("click",()=>{n.classList.toggle("expanded"),k()?a(i.slice(-6)):a(i.slice(0,-3))});a(i.slice(0,-3));const c=document.querySelector(".back-to-top");c.addEventListener("click",R);window.onscroll=()=>{F()};function R(){window.scrollTo({top:0,behavior:"smooth"})}function F(){document.body.scrollTop>20||document.documentElement.scrollTop>20?c.classList.remove("is-hidden"):c.classList.add("is-hidden")}export{H as a,f as b,Q as i};
//# sourceMappingURL=back_to_top-c276323a.js.map
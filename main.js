(()=>{"use strict";var e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button_inactive",inputErrorClass:"modal__input-type_error",errorClass:"modal__input-error_active"},t=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled","disabled"))},n=function(e,t,n,r){e.setAttribute("src",n),e.setAttribute("alt",r),t.textContent=r},r=function(e,t){e.textContent=t?"Сохранение...":"Сохранить"},o=document.querySelector("#author-description"),c=document.querySelector("#author-name"),a=document.querySelector(".profile__name"),i=document.querySelector(".profile__about"),u=document.querySelector(".modal__image"),s=document.querySelector(".modal__image-big"),l=document.querySelector(".modal__image-text"),d=function(e){e.classList.add("modal_active"),document.addEventListener("keydown",v)},m=function(e){e.classList.remove("modal_active"),document.removeEventListener("keydown",v)},f=function(){o.value=i.textContent,c.value=a.textContent},v=function(e){if("Escape"===e.key){var t=document.querySelector(".modal_active");m(t)}},_={baseUrl:"https://nomoreparties.co/v1/plus-cohort-25",headers:{authorization:"0d542192-e955-4b61-8a86-b9e7957fbdbe","Content-Type":"application/json"}},y=document.querySelector(".cards__list"),h=document.querySelector("#cards__item"),b=h.content.querySelector(".cards__image"),S=h.content.querySelector(".cards__title"),p=function(e,t){var n=g(e,t,L,k);y.prepend(n)},q=function(e,t,n){var r=e.querySelector(".cards__like");e.querySelector(".cards__number-likes").textContent=t.length,function(e,t){return Boolean(e.find((function(e){return e._id===t})))}(t,n)?r.classList.add("cards__like_active"):r.classList.remove("cards__like_active")},g=function(e,t){var r=h.content.cloneNode(!0),o=r.querySelector(".cards__like");return n(b,S,e.link,e.name),r.querySelector(".cards__group-like").addEventListener("click",(function(n){L(n.target.parentNode,e._id,t,o.classList.contains("cards__like_active"))})),r.querySelector(".cards__remove").addEventListener("click",(function(t){k(t.target,e._id)})),r.querySelector(".cards__image").addEventListener("click",(function(){return t=e.name,r=e.link,n(s,l,r,t),void d(u);var t,r})),q(r,e.likes,t),e.owner._id!==t&&r.querySelector(".cards__remove").remove(),r},k=function(e,t){(function(e){return fetch("".concat(_.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:_.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(t).then((function(){e.closest(".cards__item").remove()})).catch((function(e){console.log("Что-то пошло не так, ошибка ".concat(e," "))}))},L=function(e,t,n,r){(function(e,t){return fetch("".concat(_.baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:_.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(t,r).then((function(t){q(e,t.likes,n)})).catch((function(e){console.log("Что-то пошло не так, ошибка ".concat(e," "))}))};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=document.querySelector("#card-link"),j=document.querySelector("#card-name"),A=document.querySelector("#author-description"),x=document.querySelector("#author-name"),P=document.querySelector("#author-avatar"),U=document.querySelectorAll(".modal"),w=document.querySelector(".modal__edit-profile"),O=document.querySelector(".modal__edit-avatar-profile"),T=document.querySelector(".modal__add-card"),B=document.querySelector(".profile__add-button"),D=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__edit-avatar-button"),M=document.querySelector(".profile__name"),F=document.querySelector(".profile__about"),I=document.querySelector(".profile__avatar"),J=document.forms.authorForm,H=document.forms.authorAvatarForm,V=document.forms.cardForm,z=null;Promise.all([fetch("".concat(_.baseUrl,"/users/me"),{headers:_.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(_.baseUrl,"/cards"),{headers:_.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];M.textContent=o.name,F.textContent=o.about,I.src=o.avatar,z=o._id,c.reverse().forEach((function(e){p(e,z)}))})).catch((function(e){console.log(e)})),B.addEventListener("click",(function(e){d(T)})),D.addEventListener("click",(function(){f(),d(w)})),N.addEventListener("click",(function(){f(),d(O)})),U.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("modal_active")&&m(e),t.target.classList.contains("modal__close")&&m(e)}))})),J.addEventListener("submit",(function(e){var t;e.preventDefault(),r(e.submitter,!0),(t={name:x.value,about:A.value},fetch("".concat(_.baseUrl,"/users/me"),{method:"PATCH",headers:_.headers,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){var t,n;t=e.name,n=e.about,i.textContent=n,a.textContent=t,console.log("Обновился профиль имя: ".concat(e.name,", о профиле: ").concat(e.about))})).then((function(){m(w)})).catch((function(e){console.log("Что-то пошло не так, ошибка ".concat(e," "))})).finally((function(){r(e.submitter,!1)}))})),H.addEventListener("submit",(function(e){var t;e.preventDefault(),r(e.submitter,!0),(t={avatar:P.value},fetch("".concat(_.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:_.headers,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){console.log(e),I.src=e.avatar,console.log("Обновился профиль аватар: ".concat(e.avatar))})).then((function(){m(O)})).catch((function(e){console.log("Что-то пошло не так, ошибка ".concat(e," "))})).finally((function(){r(e.submitter,!1)}))})),V.addEventListener("submit",(function(t){t.preventDefault(),r(t.submitter,!0);var n,o=t.target;(n={name:j.value,link:C.value},fetch("".concat(_.baseUrl,"/cards"),{method:"POST",headers:_.headers,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){p(e,z)})).then((function(){o.reset(),function(e,t,n,r){var o=e.querySelector('button[type="submit"]');""!=t&&""!=n||(o.classList.add(r.inactiveButtonClass),o.setAttribute("disabled","disabled"))}(o,C.value,j.value,e),m(T)})).catch((function(e){console.log("Что-то пошло не так, ошибка ".concat(e," "))})).finally((function(){r(t.submitter,!1)}))})),function(n){Array.from(document.querySelectorAll(n.formSelector)).forEach((function(n){n.addEventListener("submit",(function(e){e.preventDefault()})),function(n,r){var o=Array.from(n.querySelectorAll(r.inputSelector)),c=n.querySelector(r.submitButtonSelector);t(o,c,e),o.forEach((function(r){r.addEventListener("input",(function(){!function(t,n){n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),n.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(t,n,e):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(t,n,n.validationMessage,e)}(n,r),t(o,c,e)}))}))}(n,e)}))}(e)})();
import gallery from './gallery-items.js';
const refs = {
    gallery: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".lightbox"),
    btn: document.querySelector('[data-action="close-lightbox"]'),
    modal: document.querySelector(".lightbox__content"),
    lightbox__image: document.querySelector(".lightbox__image"),
    lightbox__overlay: document.querySelector('.lightbox__overlay')
  };
   //----------------------------Создание розметки----------------------------------// 
    const cardsMarkup = createGelleryCards(gallery)
    refs.gallery.insertAdjacentHTML('beforeend',cardsMarkup)
    
    function createGelleryCards(gallery){
  
      return gallery.map( ({preview,original,description}) =>{
        
        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li> `;
      
       
       }).join('')
      };   

   //-------------------------------------------------------------------------------//
   refs.gallery.addEventListener("click", onGalleryClick)
   refs.btn.addEventListener("click", onCloseButton)
   refs.lightbox__overlay.addEventListener("click",onCloseButton)
//---------------------------- Открытие модельного окна ----------------------------------


function onGalleryClick (event){
  event.preventDefault()

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  if (event.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightbox__image.src = event.target.getAttribute("data-source");
    refs.lightbox__image.alt = event.target.alt;
    window.addEventListener("keyup", clickKey);
  }
 
}

  //-------------------------------------------------------------------------------//  
   
  //---------------------------- Закрытие модельного окна ----------------------------------

  

     function onCloseButton (){
      refs.lightbox.classList.remove("is-open");
      refs.lightbox__image.src = '';
      refs.lightbox__image.alt = '';
     }
      
     
     function clickKey(event) {
      if (event.code === "Escape") {
        onCloseButton();
      }
    }
      
//-------------------------------------------------------------------------------//  
      

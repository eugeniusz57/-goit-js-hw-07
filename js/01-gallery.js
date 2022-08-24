import { galleryItems } from './gallery-items.js'
// Change code below this line
const divContainer = document.querySelector('.gallery');


const makeGaleryMarkup = ({preview, original, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
}

//create markup galery
const makeGaleryGreed = galleryItems.map(makeGaleryMarkup).join("");
divContainer.innerHTML = makeGaleryGreed ;

//delegation
divContainer.addEventListener('click', onClickImg)

function onClickImg(e){
  onClickLink(e);

  if(e.target.nodeName !== "IMG"){
  return;
  }
//open modal window
  const src = e.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${src}" width="800" height="600">
  `)

  instance.show()
//close modal window if click Esc
  divContainer.addEventListener('keydown', onClickEsc)

    function onClickEsc(e){
      if(e.code === "Escape"){
        instance.close()
      }
    }
}

function onClickLink(e){ 
  e.preventDefault(); 
}







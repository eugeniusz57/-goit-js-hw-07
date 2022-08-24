import { galleryItems } from './gallery-items.js';
// Change code below this line
const divContainer = document.querySelector('.gallery');


const makeGaleryMarkup = ({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"  alt="${description}" />
    </a>

    `
}

//create markup galery
const makeGaleryGreed = galleryItems.map(makeGaleryMarkup).join("");
divContainer.innerHTML = makeGaleryGreed ;

//use SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {   
    captionsData:	'alt',
     captionDelay:	250 ,
    });

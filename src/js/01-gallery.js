// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
         </a>
    </div>`
    )
    .join("");
}

new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});



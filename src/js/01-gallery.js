// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

// pętla tworząca galerie
for (let i = 0; i < galleryItems.length; i++) {
  //  a
  const gallery__item = document.createElement('a');
  gallery__item.classList.add('gallery__item');
  gallery__item.href = galleryItems[i].original;
  // img
  const gallery__image = document.createElement('img');
  gallery__image.classList.add('gallery__image');
  gallery__image.setAttribute('data-source', galleryItems[i].original);
  gallery__image.setAttribute('alt', galleryItems[i].description);
  gallery__image.src = galleryItems[i].preview;
  // append
  gallery.append(gallery__item);
  gallery__item.append(gallery__image);
}

// funkcja tworząca modal
let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const cardMarkup = createGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', cardMarkup);
galleryBox.addEventListener('click', handleOpenOriginImg);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
      </div>`;
    })
    .join('');
}

function handleOpenOriginImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImg = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img width="1280" src="${selectedImg}">`,
  );

  instance.show();

  function onModalClose(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  window.addEventListener('keydown', onModalClose, { once: true });
}

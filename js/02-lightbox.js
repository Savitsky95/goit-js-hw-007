import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");

// Add gallery items to list
galleryItems.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  galleryItem.innerHTML = `
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;

  galleryList.append(galleryItem);
});

// Initialize SimpleLightbox
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
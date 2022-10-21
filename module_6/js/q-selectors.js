const button = document.querySelector('.button');
const menuItem = document.querySelector('.menu-item');
const menuItems = document.querySelectorAll('.menu-item');
const img = document.querySelector('.unsplash-image');

button.addEventListener('click', () => {
  button.textContent = 'hello';
  button.style.backgroundColor = 'teal';
  button.style.color = 'yellow';
  button.style.padding = '5px 55px';

  console.log(button.dataset.action);

  updateImage();
  toggleActiveItem();
});

function updateImage() {
  // image.alt = 'cool image';
  // image.src =
  //   'https://images.unsplash.com/photo-1557820178-20186da06935?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80';

  // console.log(img.getAttribute('src'));
  img.setAttribute('alt', 'cool image');
  img.setAttribute(
    'src',
    'https://images.unsplash.com/photo-1557820178-20186da06935?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80',
  );
}

function setActiveItem() {
  menuItem.classList.add('active');
}

function toggleActiveItem() {
  menuItem.classList.toggle('active');
}

img.alt = 'tower';

console.log(menuItem);
console.log(menuItems);
console.log(button);
console.log(button.style);
console.dir(img);
console.log(img.alt);
console.log(img.getAttribute('alt'));

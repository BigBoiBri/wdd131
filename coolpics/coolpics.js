const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', function () {
  navLinks.classList.toggle('show');
});

const modal = document.createElement('dialog');
modal.innerHTML = `
  <img src="" alt="Large view">
  <button class="close-viewer">X</button>`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function (event) {
  const img = event.target.closest('img');
  if (img) {
    modalImg.src = img.src.replace('norris-sm.jpeg', 'norris-full.jpeg'); // or just use img.src if no large version
    modal.showModal();
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

closeButton.addEventListener('click', () => {
  modal.close();
});

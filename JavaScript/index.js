function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = imgElement.src.replace("_kicsi", "_nagy");
}

function closeModal(event) {
  if (event) event.stopPropagation();
  document.getElementById("modal").style.display = "none";
}


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    navLinks.style.transition = 'max-height 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)';
    requestAnimationFrame(() => {
      navLinks.style.maxHeight = '0px';
    });
    navLinks.addEventListener('transitionend', function handler() {
      navLinks.classList.remove('active');
      navLinks.style.maxHeight = '';
      navLinks.style.transition = '';
      navLinks.removeEventListener('transitionend', handler);
    });
  } else {
    navLinks.classList.add('active');
    navLinks.style.overflow = 'hidden';
    navLinks.style.maxHeight = '0px';
    navLinks.style.transition = 'max-height 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)';
    requestAnimationFrame(() => {
      navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    });
    navLinks.addEventListener('transitionend', function handler() {
      navLinks.style.maxHeight = '';
      navLinks.style.transition = '';
      navLinks.removeEventListener('transitionend', handler);
    });
  }
});


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
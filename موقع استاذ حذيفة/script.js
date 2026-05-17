const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');

if (menuToggle && navBar) {
  menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-bar') && !event.target.closest('.menu-toggle')) {
      navBar.classList.remove('open');
    }
  });
}

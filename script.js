const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
links?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();

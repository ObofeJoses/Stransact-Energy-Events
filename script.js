document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (!toggleBtn || !mainNav) return;

  const navLinks = mainNav.querySelectorAll('a');

  // Toggle mobile navigation menu
  toggleBtn.addEventListener('click', function () {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.classList.toggle('is-active');
    mainNav.classList.toggle('is-active');
  });

  // Automatically close menu when a navigation link is selected
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('is-active');
      mainNav.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
});
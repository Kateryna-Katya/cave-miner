const links = document.querySelectorAll('.navigation-item');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    const aTag = this.querySelector('a');
    const href = aTag?.getAttribute('href') || '';

    if (href.includes('index.html') && !window.location.pathname.includes('index.html')) {
      return;
    }

    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
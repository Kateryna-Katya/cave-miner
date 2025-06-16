document.addEventListener('DOMContentLoaded', () => {
    function getHeaderOffset() {
      const header = document.getElementById('site-header');
      return header ? header.offsetHeight : 0;
    }
  
    function smoothScrollToElement(targetId) {
      const target = document.getElementById(targetId);
      if (!target) return;
  
      const offset = getHeaderOffset();
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  
    document.querySelectorAll('a[href*="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
  
        const isExternal = href.startsWith('http') || (!href.startsWith('#') && !href.includes('index.html#'));
        if (isExternal) return;
  
        e.preventDefault();
  
        const hashIndex = href.indexOf('#');
        const targetId = href.substring(hashIndex + 1);
        smoothScrollToElement(targetId);
      });
    });
  
      const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      setTimeout(() => {
        smoothScrollToElement(targetId);
      }, 500);
    }
  });
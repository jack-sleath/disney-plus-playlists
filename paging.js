 // Function to show the page with the given id and hide others
 function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  // Router function based on the URL hash
  function router() {
    const hash = window.location.hash.substring(1) || 'home';
    showPage(hash);
  }

  // Listen for hash changes and load the appropriate content
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
(function () {
  const images = document.querySelectorAll('.fade-in-on-load');
  images.forEach((img) => {
    img.classList.add('is-hidden');

    if (img.complete) {
      fadeIn(img);
    } else {
      img.addEventListener('load', () => {
        fadeIn(img);
      });
    }
  });

  function fadeIn(img) {
    const delay = img.getAttribute('data-fade-in-delay');
    let parsedDelay = 0;
    if (delay) {
      const parsed = parseInt(delay);
      if (!isNaN(parsed)) {
        parsedDelay = parsed;
      }
    }

    if (parsedDelay > 0) {
      setTimeout(() => {
        animate();
      }, parsedDelay);
    } else {
      animate();
    }

    function animate() {
      img.classList.remove('is-hidden')
      img.classList.add('is-fading-in');

      setTimeout(() => {
        img.classList.remove('is-fading-in');
      }, 500);
    }
  }
})()
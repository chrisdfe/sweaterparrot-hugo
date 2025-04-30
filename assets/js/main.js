// fade in on image load
(function () {
  const imagesToFadeIn = document.querySelectorAll('.fade-in-on-load');

  if (!imagesToFadeIn.length) return;

  let currentImageIdx = 0;
  let currentImage = imagesToFadeIn[currentImageIdx];

  initializeCurrentImage();

  function initializeCurrentImage() {
    currentImage.classList.add('is-hidden');

    if (currentImage.complete) {
      fadeInCurrentImage();
    } else {
      currentImage.addEventListener('load', () => {
        fadeInCurrentImage();
      });

      // for mobile safari compatibility
      currentImage.onload = fadeInCurrentImage;
    }
  };

  function fadeInCurrentImage() {
    fadeIn(currentImage, () => {
      if (currentImageIdx < imagesToFadeIn.length - 1) {
        currentImage = imagesToFadeIn[++currentImageIdx];
        initializeCurrentImage();
      }
    });
  }

  function fadeIn(img, next) {
    img.classList.remove('is-hidden')

    setTimeout(() => {
      next();
    }, 20);
  }
})();
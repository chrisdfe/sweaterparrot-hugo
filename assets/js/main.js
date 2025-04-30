// fade in on image load
(function () {
  const imagesToFadeIn = document.querySelectorAll('.fade-in-on-load');

  const imageHasInitializedMap = [...new Array(imagesToFadeIn.length)].map(() => false)
  console.log("imageHasInitializedMap", imageHasInitializedMap);

  if (!imagesToFadeIn.length) return;

  initializeImage(0);

  function initializeImage(idx) {
    const img = imagesToFadeIn[idx];
    const hasInitialized = imageHasInitializedMap[idx];

    if (hasInitialized) return;

    imageHasInitializedMap[idx] = true;
    console.log("imageHasInitializedMap", imageHasInitializedMap);

    img.classList.add('is-hidden');

    if (img.complete) {
      fadeInImage(idx);
    } else {
      img.addEventListener('load', () => {
        fadeInImage(idx);
      });

      // for mobile safari compatibility
      img.onload = () => {
        fadeInImage(idx);
      };
    }
  };

  function fadeInImage(idx) {
    const img = imagesToFadeIn[idx];
    fadeIn(img, () => {
      if (idx < imagesToFadeIn.length - 1) {
        initializeImage(idx + 1);
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
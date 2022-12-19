const videos = document.querySelectorAll('video');

const options = {
  // Трригер сработает при выходе как верхней, так и нижней границы
  threshold: [0.2, 0.8],
};
const videoObserver = entries => {
  entries.forEach(entry => {
    const video = entry.target;
    // if (entry.isIntersecting) {
    //   if (video.paused) {
    //     video.play();
    //   }
    // }
    // проверяем, что видео в принципе запускалось

    // Если видео вне viewport или видимо только на 20%
    if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
      // жмем паузу
      video.pause();
    } else {
      // иначе воспроизводим
      video.play();
    }
  });
};

let observer = new IntersectionObserver(videoObserver, options);

videos.forEach(video => observer.observe(video));

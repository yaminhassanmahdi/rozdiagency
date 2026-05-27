export const initAboutVideo = () => {
  if (typeof window === 'undefined') return;

  const video = document.querySelector('[data-about-video]') as HTMLVideoElement;
  const control = document.querySelector('[data-about-video-control]') as HTMLElement;
  if (!video || !control) return;

  function setPlaying(playing: boolean) {
    if (control) control.dataset.play = playing ? 'true' : 'false';
  }

  function syncState() {
    setPlaying(!video.paused);
  }

  control.addEventListener('click', (e) => {
    e.preventDefault();
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  });

  video.addEventListener('play', syncState);
  video.addEventListener('pause', syncState);
  video.addEventListener('ended', () => setPlaying(false));

  // Start playing (autoplay may be blocked; ensure we're in sync)
  video.muted = true;
  const played = video.play();
  if (played && typeof played.then === 'function') {
    played.then(() => setPlaying(true)).catch(() => setPlaying(false));
  } else {
    setPlaying(!video.paused);
  }
};

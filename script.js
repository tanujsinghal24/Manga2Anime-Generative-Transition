function startTransition() {
  const image = document.getElementById('mangaPanel');
  const transition = document.getElementById('transitionVideo');
  const main = document.getElementById('mainVideo');

  // Hide the static image
  image.style.opacity = '0';

  // Show and play transition video
  transition.style.opacity = '1';
  transition.play();

  // When transition ends, start main video
  transition.onended = () => {
    transition.style.opacity = '0';
    main.style.opacity = '1';
    main.currentTime = 194.4; // If needed
    main.play();
  };
}

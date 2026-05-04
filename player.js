const player = document.getElementById('player');

let playerX = 0;
const speed = 5; // скорость движения

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    playerX += speed;
  } else if (event.key === 'ArrowLeft') {
    playerX -= speed;
  }
  player.style.left = playerX + 'px';
});

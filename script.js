const player = document.querySelector('.player');
const video = player.querySelector('.video');
const progressRange = player.querySelector('.progress-range');
const progressBar = player.querySelector('.progress-bar');
const playBtn = player.querySelector('.play-controls');
const volumeIcon = player.querySelector('.volume-icon');
const volumeRange = player.querySelector('.volume-range');
const volumeBar = player.querySelector('.volume-bar');
const speed = player.querySelector('.player-speed');
const currentTime = player.querySelector('.time-elapsed');
const duration = player.querySelector('.time-duration');
const fullscreen = player.querySelector('.fullscreen');

// Global Variables


// Play / Pause Functionality
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fas fa-pause" title="Pause"></i>'
    } else {
        video.pause();
        playBtn.innerHTML = '<i class="fas fa-play" title="Play"></i>'
    }
}











// 
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


// Play & Pause Functionality ---------------------- //
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
// on video end, show play button icon
video.addEventListener('ended', () => playBtn.innerHTML = '<i class="fas fa-play" title="Play"></i>');

// Format current time, duration
function displayTime(time) {
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = Math.floor(time % 60);
    seconds = seconds > 9? seconds: `0${seconds}`;
    return `${minutes}:${seconds}`;
}

// Update progress bar as video plays
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
function updateProgress(e) {
    progressBar.style.width = `${video.currentTime / video.duration * 100}%`;
    currentTime.innerHTML = `${displayTime(video.currentTime)} /`;
    duration.innerHTML = `${displayTime(video.duration)}`
}

// Click to seek within the video
progressRange.addEventListener('click', setProgress)
function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth;
    progressBar.style.width = `${newTime*100}%`;
    video.currentTime = newTime * video.duration;
}







// 
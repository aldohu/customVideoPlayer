const video = document.getElementById('video');
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const timer = document.querySelector('.timer');
const playProgressBar = document.getElementById('playProgressBar');
const volumeSlider = document.getElementById('volumeSlider');
video.volume = volumeSlider.value;
volumeSlider.addEventListener('input', function () {
	let volume = volumeSlider.value;
	video.volume = volume;
});
playButton.addEventListener('click', function () {
	if (video.paused) {
		video.play();
		playButton.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		video.pause();
		playButton.innerHTML = '<i class="fas fa-play"></i>';
	}
});
stopButton.addEventListener('click', function () {
	video.pause();
	video.currentTime = 0;
	playButton.innerHTML = '<i class="fas fa-play"></i>';
});
video.addEventListener('timeupdate', function () {
	var currentTime = video.currentTime;
	var duration = video.duration;

	// Update the timer text
	timer.textContent = formatTime(currentTime) + '/' + formatTime(duration);

	// Update the play progress bar value
	var progress = (currentTime / duration) * 100;
	playProgressBar.value = progress;
});
function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time % 60);
	seconds = seconds < 10 ? '0' + seconds : seconds;
	return minutes + ':' + seconds;
}

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('promoVideo');
    const playBtn = document.getElementById('playBtn');

    if (video && playBtn) {
        playBtn.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                playBtn.style.display = 'none'; // Hide the play button while playing
            }
        });

        video.addEventListener('pause', function () {
            playBtn.style.display = 'block'; // Show play button again when paused
        });

        video.addEventListener('click', function () {
            if (!video.paused) {
                video.pause();
            }
        });
    }
});
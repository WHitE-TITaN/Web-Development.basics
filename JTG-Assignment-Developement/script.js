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

const video = document.getElementById('promoVideo');
const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = 'none'; // Hide play button when video is playing
    } else {
        video.pause();
        playBtn.style.display = 'flex'; // Show play button when video is paused
    }
});
video.addEventListener('ended', () => {
    playBtn.style.display = 'flex'; // Show play button when video ends
});

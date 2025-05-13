document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in-on-scroll');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fade in only once
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });
});



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



document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let interval = setInterval(nextTestimonial, 5000);

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.remove('active');
      dots[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function nextTestimonial() {
    let next = (currentIndex + 1) % testimonials.length;
    showTestimonial(next);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(interval); // Stop and restart autoplay on click
      showTestimonial(i);
      interval = setInterval(nextTestimonial, 5000);
    });
  });

  showTestimonial(currentIndex); // Start with first
});

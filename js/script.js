// Add custom JavaScript here
function typeText() {
  if (!loaded) {
    const text = "I am Sagar Prasad.";
    const typingTextEl = document.getElementById("typing-text");
    const delay = 100;
    typingEffect(text, typingTextEl, delay);
  }
}

function typingEffect(text, typingTextEl, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingTextEl.textContent += text.charAt(i);
    }, delay * i);
  }
}

let loaded = false;
document.addEventListener("DOMContentLoaded", () => {
  typeText();
  loaded = true;
});

/**
 * Initiate portfolio lightbox
 */
const portfolioLightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

/**
 * Initiate portfolio details lightbox
 */
const portfolioDetailsLightbox = GLightbox({
  selector: ".portfolio-details-lightbox",
  width: "90%",
  height: "90vh",
});

/**
 * Portfolio details slider
 */
new Swiper(".portfolio-details-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

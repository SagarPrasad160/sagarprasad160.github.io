// Add custom JavaScript here
function typeText() {
  const text = "I am Sagar Prasad.";
  const typingTextEl = document.getElementById("typing-text");
  const delay = 100;
  typingEffect(text, typingTextEl, delay);
}

function typingEffect(text, typingTextEl, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingTextEl.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", typeText);

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

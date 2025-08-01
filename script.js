function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;
  captionText.textContent = imgElement.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Slideshow autoplay in modal
let currentIndex = 0;
let images = [];

window.onload = () => {
  images = Array.from(document.querySelectorAll('.gallery img'));
  setInterval(() => {
    const modal = document.getElementById("modal");
    if (images.length > 0 && modal.style.display === "flex") {
      currentIndex = (currentIndex + 1) % images.length;
      openModal(images[currentIndex]);
    }
  }, 5000);

  // Force music to play if user interaction is needed
  const music = document.getElementById("bgMusic");
  document.body.addEventListener("click", () => music.play(), { once: true });
};

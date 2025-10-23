// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});




// Auto scroll carousel
const carousel = document.getElementById("courseCarousel");
let scrollAmount = 0;
let scrollDirection = 1; // 1 for right, -1 for left

function autoScroll() {
  if (!carousel) return;

  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  // Move scroll
  scrollAmount += scrollDirection * 2; // scroll speed
  carousel.scrollLeft = scrollAmount;

  // Reverse direction at edges
  if (scrollAmount >= maxScroll || scrollAmount <= 0) {
    scrollDirection *= -1;
  }

  requestAnimationFrame(autoScroll);
}

// Start animation
autoScroll();

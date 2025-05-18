// Navbar mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  }
});

// Countdown timer
const targetDate = new Date("2025-07-01T12:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const timerEl = document.getElementById("timer");

  if (!timerEl) return;

  if (distance < 0) {
    timerEl.innerHTML = "🚀 Launching soon!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerEl.innerHTML =
    `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
}

updateTimer();
setInterval(updateTimer, 1000);


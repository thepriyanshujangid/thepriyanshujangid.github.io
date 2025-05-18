// Set your launch date here (YYYY-MM-DDTHH:MM:SS)
const launchDate = new Date('2025-06-01T00:00:00');
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;
  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    countdownEl.textContent = `Launching in ${days}d ${hours}h ${mins}m ${secs}s`;
  } else {
    countdownEl.textContent = "We're live!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();


const greeting = document.getElementById('greeting');
const message = document.getElementById('message');

// Animasi teks
setTimeout(() => {
    greeting.style.color = '#f1c40f';
    message.style.color = '#f1c40f';
}, 2000);
// Memastikan audio diputar otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  const lagu = document.getElementById("lagu");
  lagu.play().catch(() => {
    console.log("Autoplay diblokir oleh browser. Silakan klik tombol play manual.");
  });
});
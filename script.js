// Memastikan audio diputar otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  const lagu = document.getElementById("lagu");
  lagu.play().catch(() => {
    console.log("Autoplay diblokir oleh browser. Silakan klik tombol play manual.");
  });
});

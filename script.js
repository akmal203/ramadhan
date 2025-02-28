// script.js
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

playButton.addEventListener('click', () => {
    audio.play(); // Memutar lagu
    playButton.classList.add('hide'); // Menyembunyikan tombol
});

// Menampilkan tombol kembali setelah lagu selesai
audio.addEventListener('ended', () => {
    playButton.classList.remove('hide'); // Menampilkan tombol
});

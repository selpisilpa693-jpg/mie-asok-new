```javascript
// TOMBOL PESAN
function pesan() {
    let pilihan = confirm(
        "Selamat datang di MIE ASOK! Apakah kamu ingin memesan?"
    );

    if (pilihan) {
        alert("Terima kasih! Selamat menikmati MIE ASOK 🍜");
    } else {
        alert("Terima kasih sudah mengunjungi MIE ASOK!");
    }
}

// EFEK KARTU MENU
document.querySelectorAll(".card").forEach(function(card) {
    card.addEventListener("click", function() {
        let nama = card.querySelector("h3").textContent;

        alert("Kamu memilih menu " + nama);
    });
});

// PESAN KETIKA WEBSITE DIBUKA
window.addEventListener("load", function() {
    console.log("Website MIE ASOK berhasil dibuka!");
});
```

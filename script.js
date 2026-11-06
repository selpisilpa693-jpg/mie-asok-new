```javascript
// TOMBOL PESAN SEKARANG
function pesan() {
    alert("🍜 Selamat datang di MIE ASOK!");

    let konfirmasi = confirm("Apakah kamu ingin memesan MIE ASOK?");

    if (konfirmasi) {
        alert("Terima kasih! Pesanan kamu akan segera diproses.");
    } else {
        alert("Terima kasih sudah mengunjungi MIE ASOK!");
    }
}

// EFEK MENU NAVIGASI
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Kamu membuka: " + link.textContent);
    });
});

// SAPAAN PENGUNJUNG
window.addEventListener("load", function() {
    console.log("Website MIE ASOK berhasil dibuka!");
});

// EFEK KARTU MENU
document.querySelectorAll(".card").forEach(function(card) {
    card.addEventListener("click", function() {
        let namaMenu = card.querySelector("h3").textContent;

        alert("Kamu memilih " + namaMenu + ". Selamat menikmati!");
    });
});
```

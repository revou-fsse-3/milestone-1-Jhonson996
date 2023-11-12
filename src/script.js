// jalan ketika load
document.addEventListener("DOMContentLoaded", function () {
    revealHidden(); // Panggil fungsi ini saat DOMContentLoaded
});

// jalan ketika scroll
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealHidden);
});

function revealHidden() {
    var elements = document.querySelectorAll(".hidden");
    for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = elements[i].getBoundingClientRect().top;
        var distanceFromTop = elementTop - windowHeight + 100;

        if (distanceFromTop < 0) {
            elements[i].classList.add("visible");
        }
    }
}

// <div class="container">
// <div class="content">
//     <h1 class="hidden">Judul Konten</h1>
//     <p class="hidden">Isi konten Anda di sini.</p>
// </div>
// </div>
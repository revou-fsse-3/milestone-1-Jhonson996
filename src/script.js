const btnNav = document.getElementById('btn-nav');
const headerNav = document.querySelector('header');

btnNav.addEventListener('click', () => {
    if (headerNav.style.left === '0px') {
        closeNavBar();
    } else {
        openNavBar();
    }
});

function openNavBar() {
    headerNav.style.left = '0';
}

function closeNavBar() {
    headerNav.style.left = '-20rem';
}

const menuItems = document.querySelectorAll('nav a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeNavBar();
    });
});




// // jalan ketika load
// document.addEventListener("DOMContentLoaded", function () {
//     revealHidden(); // Panggil fungsi ini saat DOMContentLoaded
// });

// // jalan ketika scroll
// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", revealHidden);
// });

// function revealHidden() {
//     var elements = document.querySelectorAll(".hidden");
//     for (var i = 0; i < elements.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = elements[i].getBoundingClientRect().top;
//         var distanceFromTop = elementTop - windowHeight + 100;

//         if (distanceFromTop < 0) {
//             elements[i].classList.add("visible");
//         }
//     }
// }


// Sticky Navbar on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Hide menu on scroll (both up and down)
window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
});
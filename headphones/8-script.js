
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("show");
    });
} else {
    console.error("Hamburger or nav-menu not found in DOM.");
};


const menuMobile = document.querySelector(".mobile-menu-icon");
const navMenu = document.querySelector(".mobile-menu");

menuMobile.addEventListener("click", () => {
    menuMobile.style.transition = "0.5s ease-in-out";
    menuMobile.classList.toggle("active");
    navMenu.classList.toggle("active");
})

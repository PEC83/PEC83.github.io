const navToogle = document.querySelector(".nav-toogle")
const navMenu = document.querySelector(".nav-menu")

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

const menuLinks = document.querySelectorAll('.nav a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        navMenu.classList.remove("nav-menu_visible");
    })
})

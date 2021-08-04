
// Navigation Section
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const navlinks = document.querySelectorAll(".nav_links");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
    navlinks.classList.toggle("show_nav");
})


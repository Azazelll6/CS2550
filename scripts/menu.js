const smallScreenMenu = document.getElementById("small-screen-menu");
const projectsDropdown = document.getElementById("projects-dropdown");
const primaryNav = document.getElementsByClassName("primary-nav");
const dropdownNav = document.getElementsByClassName("dropdown-nav");

smallScreenMenu.addEventListener("click", () => {
    Array.from(primaryNav).forEach(nav => {
        nav.style.display = nav.style.display === "none" ? "block" : "none";
    });
    let displayState = primaryNav[0].style.display;
    Array.from(dropdownNav).forEach(nav => {
        nav.style.display = displayState === "none" ? "none" : nav.style.display;
    });
});

projectsDropdown.addEventListener("click", () => {
    Array.from(dropdownNav).forEach(nav => {
        nav.style.display = nav.style.display === "none" ? "block" : "none";
    });
});

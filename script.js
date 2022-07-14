const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5, menuBars]

// Event Listeners

function toggleNavOnClick(element) {
    element.forEach((nav) => {
        nav.addEventListener('click', toggleNav);
    })
}

toggleNavOnClick(navItems);

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    } else {
        // animate out - overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    };
}
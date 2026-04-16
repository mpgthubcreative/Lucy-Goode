const hamburger = document.querySelector('.hamburger');
const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');
const drawerLinks = document.querySelectorAll('.nav-drawer-links a');

function openNav() {
    navDrawer.classList.add('open');
    navOverlay.classList.add('active');
    navDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    navDrawer.classList.remove('open');
    navOverlay.classList.remove('active');
    navDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

drawerLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
});

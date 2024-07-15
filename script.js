function toggleMenu() {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    // Set the top property of the menu dynamically
    menu.style.top = headerHeight + 'px';

    menu.classList.toggle('active');
}

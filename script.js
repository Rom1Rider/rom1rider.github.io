function toggleMenu() {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    // Set the top property of the menu dynamically
    menu.style.top = headerHeight + 'px';

    menu.classList.toggle('active');
}

window.onload = function () {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";

    // Fermer la pop-up lorsqu'on clique sur le bouton X
    var closeBtn = document.getElementById("closePopup");
    closeBtn.onclick = function () {
        popup.style.display = "none";
    }

    // Fermer la pop-up si l'utilisateur clique en dehors de celle-ci
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
};

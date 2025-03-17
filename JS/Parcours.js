// Fonction générique pour afficher une pop-up
function togglePopup(popupId, action) {
    const popup = document.getElementById(popupId);
    if (action === "open") {
        popup.style.visibility = "visible";  // Afficher la pop-up
        popup.style.opacity = "1";  // Rendre la pop-up opaque
    } else if (action === "close") {
        popup.style.visibility = "hidden";  // Cacher la pop-up
        popup.style.opacity = "0";  // Rendre la pop-up transparente
    }
}

// Ouverture des pop-ups
document.getElementById("lce").addEventListener("click", function() {
    togglePopup("popuplce", "open");
});
document.getElementById("lamap").addEventListener("click", function() {
    togglePopup("popuplamap", "open");
});
document.getElementById("catacombe").addEventListener("click", function() {
    togglePopup("popupcatacombe", "open");
});
document.getElementById("kfinds").addEventListener("click", function() {
    togglePopup("popupkfinds", "open");
});
document.getElementById("linkchat").addEventListener("click", function() {
    togglePopup("popuplinkchat", "open");
});

// Fermeture des pop-ups (par clic sur la croix)
document.getElementById("closeBtn1").addEventListener("click", function() {
    togglePopup("popuplce", "close");
});
document.getElementById("closeBtn2").addEventListener("click", function() {
    togglePopup("popuplamap", "close");
});
document.getElementById("closeBtn3").addEventListener("click", function() {
    togglePopup("popupcatacombe", "close");
});
document.getElementById("closeBtn4").addEventListener("click", function() {
    togglePopup("popupkfinds", "close");
});
document.getElementById("closeBtn5").addEventListener("click", function() {
    togglePopup("popupkfinds", "close");
});

// Fermeture des pop-ups si l'utilisateur clique en dehors de la pop-up
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("popup")) {
        const popups = document.querySelectorAll(".popup");
        popups.forEach(popup => {
            togglePopup(popup.id, "close");
        });
    }
});

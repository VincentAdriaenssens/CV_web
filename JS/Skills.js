    // Sélectionner le bouton et le paragraphe
    const button = document.querySelector('.showButton');
    const paragraph = document.querySelector('#bouton_content');

    // Ajouter un événement de clic au bouton
    button.addEventListener('click', function() {
    // Vérifier l'état actuel du paragraphe (visible ou caché)
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
    paragraph.style.display = 'inline-block';  // Afficher le paragraphe
} else {
    paragraph.style.display = 'none';  // Cacher le paragraphe
}
});

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Clicked on: ${link.textContent}`);
        // Hier kannst du Klicks speichern oder Analytics hinzufügen
    });
});

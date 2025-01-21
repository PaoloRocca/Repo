// Gestione sfumatura hover
function getHoverColor(color) {
    const r = parseInt(color.substring(1,3), 16);
    const g = parseInt(color.substring(3,5), 16);
    const b = parseInt(color.substring(5,7), 16);

    const minR = Math.floor(Math.abs(r - 51));
    const minG = Math.floor(Math.abs(g - 51));
    const minB = Math.floor(Math.abs(b - 51));

    const retColor = "#" 
        + minR.toString(16).padStart(2,"0")
        + minG.toString(16).padStart(2,"0")
        + minB.toString(16).padStart(2,"0")
    return (retColor)
}

document.addEventListener("DOMContentLoaded", function () {
    const infoButtons = document.querySelectorAll('.info-btn');
    const messageTextArea = document.getElementById('message'); // La textarea dei contatti

    // Gestione dei bottoni "Richiedi informazioni"
    infoButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Ottieni il numero del progetto dal data attribute
            const projectNumber = this.getAttribute('data-project');
            // Compila automaticamente la textarea con il nome del progetto
            messageTextArea.value = "Richiesta informazioni su Progetto " + projectNumber + ":\n";
            
            // Puoi anche scorrere la pagina fino alla sezione contatti se vuoi che l'utente arrivi lì subito
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Funzione per cambiare il colore di contrasto
    const colorInput = document.getElementById('colorInput'); // Selettore del colore
    const defaultColor = colorInput.value;
    document.documentElement.style.setProperty('--contrast-color', defaultColor); // Imposta il colore iniziale
    document.documentElement.style.setProperty('--hover-color', getHoverColor(defaultColor)); // Imposta il colore hover


    // Event listener per il cambio del colore
    colorInput.addEventListener('input', function () {
        const color = this.value;
        // Modifica la variabile CSS del colore di contrasto
        document.documentElement.style.setProperty('--contrast-color', color);
        document.documentElement.style.setProperty('--hover-color', getHoverColor(color)); // Imposta il colore hover
    });

    // Funzione per scrollare in cima alla pagina
    const scrollToTopButtons = document.querySelectorAll('.scroll-to-top');
    scrollToTopButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Funzione per applicare uno scroll personalizzato
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'  // Effetto di transizione
            });
        });
    });
});

const sectionHome = document.querySelector(".home")

let start;
let elapsed;
let duration = 1000; // Duración de la animación en milisegundos

window.dispelSection = () => {
    requestAnimationFrame(bounce);
}

function bounce(timestamp) {
    if (!start) start = timestamp;
    elapsed = timestamp - start;

    // Calcula la posición del elemento en base al tiempo transcurrido
    let position = Math.abs(Math.sin(elapsed / duration * Math.PI * 2)) * 200;

    // Aplica la posición al elemento
    sectionHome.style.transform = `translateX(${position}%)`;

    // Si la animación aún no ha terminado, solicita el próximo cuadro
    if (elapsed < duration) {
        requestAnimationFrame(bounce);
    }
}

function fadeIn(timestamp) {
    if (!start) start = timestamp;
    elapsed = timestamp - start;

    // Calcula la opacidad del elemento en base al tiempo transcurrido
    let opacity = elapsed / duration;

    // Aplica la opacidad al elemento
    sectionHome.style.opacity = opacity;

    // Si la animación aún no ha terminado, solicita el próximo cuadro
    if (elapsed < duration) {
        requestAnimationFrame(fadeIn);
    }
}
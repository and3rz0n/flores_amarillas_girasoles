// Crear y animar las flores en SVG
const overlay = document.querySelector('.overlay');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Nuevo girasol en SVG, con el centro marrón y verde, y pétalos que se extienden desde el centro
    flower.innerHTML = `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <!-- Centro marrón claro -->
            <circle cx="100" cy="100" r="30" fill="#D2B48C" stroke="#8B4513" stroke-width="2"/> <!-- Marrón claro con borde marrón oscuro -->
            <!-- Círculo verde en el centro -->
            <circle cx="100" cy="100" r="15" fill="#556B2F"/> <!-- Verde -->

            <!-- Pétalos amarillos -->
            <g fill="#FFD700" stroke="#DAA520" stroke-width="1">
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(0 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(30 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(60 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(90 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(120 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(150 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(180 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(210 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(240 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(270 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(300 100 100)" />
                <path d="M100,50 Q110,10 120,50 Q110,70 100,50" transform="rotate(330 100 100)" />
            </g>
        </svg>
    `;

    // Asignar tamaños aleatorios (grande, mediano, pequeño)
    const randomSize = Math.random();
    let size;
    if (randomSize < 0.33) {
        size = 150;  // Tamaño pequeño
    } else if (randomSize < 0.66) {
        size = 200;  // Tamaño mediano
    } else {
        size = 250;  // Tamaño grande
    }

    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    // Posicionar aleatoriamente las flores
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    flower.style.left = `${xPos}px`;
    flower.style.top = `${yPos}px`;

    // Añadir la flor al contenedor
    overlay.appendChild(flower);

    // Eliminar la flor tras 10 segundos
    setTimeout(() => {
        flower.remove();
    }, 15000);
}

// Generar flores continuamente
setInterval(createFlower, 100);

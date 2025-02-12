// Estado del menú
let menuVisible = false;

// Evento para descargar el CV
document.getElementById("downloadCv").addEventListener("click", descargarCV);

// Función para descargar el CV
function descargarCV() {
    const cvUrl = "CV-Ariel-Omar-Bustos-Suazo.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Ariel-Omar-Bustos-Suazo.pdf";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    menuVisible = !menuVisible;
    nav.classList.toggle("responsive", menuVisible);
}

// Función que oculta el menú al seleccionar una opción
function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distanciaSkills >= 300) {
        const habilidades = document.querySelectorAll(".progreso");
        const clases = [
            "javascript", "htmlcss", "GIT", "wordpress", "drupal",
            "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect"
        ];

        habilidades.forEach((habilidad, index) => {
            habilidad.classList.add(clases[index]);
        });
    }
}

// Detectar el scrolling para aplicar la animación de habilidades
window.addEventListener("scroll", efectoHabilidades);

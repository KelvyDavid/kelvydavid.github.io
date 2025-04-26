// Esperar a que el DOM cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Gracias por contactarme. Te responderé pronto.");
            this.reset();
        });
    }

    // Cargar animación de partículas
    tsParticles.load("particles-js", {
        background: {
            color: "#0f2027"
        },
        fpsLimit: 60,
        particles: {
            number: { value: 60 },
            color: { value: "#00d4ff" },
            shape: {
                type: "circle",
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            links: {
                enable: true,
                distance: 150,
                color: "#00d4ff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                outModes: "bounce"
            }
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true
            },
            modes: {
                repulse: { distance: 100 }
            }
        },
        detectRetina: true
    });
});

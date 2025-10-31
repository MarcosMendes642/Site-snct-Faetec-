// Contadores em tempo real
function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const increment = parseFloat(element.dataset.increment);
    let current = 0;
    
    // Animação inicial rápida
    const quickInterval = setInterval(() => {
        current += target / 50;
        if (current >= target) {
            current = target;
            clearInterval(quickInterval);
            
            // Depois continua incrementando
            setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current).toLocaleString('pt-BR');
            }, 1000);
        }
        element.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 30);
}

// Iniciar quando a seção aparecer na tela
const observerOptions = {
    threshold: 0.3
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter-number');
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            });
        }
    });
}, observerOptions);

// Observar a seção
const counterSection = document.querySelector('#contador');
if (counterSection) {
    counterObserver.observe(counterSection);
}
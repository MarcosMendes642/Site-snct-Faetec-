// Carrossel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const slideInterval = 3000; // 3 segundos

function showSlide(index) {
    // Remove active de todos
    slides.forEach(slide => {
        slide.classList.remove('active', 'exit-left');
    });
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Adiciona exit-left no slide atual
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('exit-left');
    }
    
    // Atualiza índice
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    // Ativa novo slide
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Auto-play
let autoPlay = setInterval(() => {
    showSlide(currentSlide + 1);
}, slideInterval);

// Clique nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(autoPlay);
        showSlide(index);
        autoPlay = setInterval(() => {
            showSlide(currentSlide + 1);
        }, slideInterval);
    });
});

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
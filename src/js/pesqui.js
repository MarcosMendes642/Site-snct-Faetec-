window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function showImpact() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('results');

    if (input.value.trim() === '') return;

    results.classList.add('show');

    // Rola suavemente até os resultados
    setTimeout(() => {
        results.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    }, 100);
}

// Permite pesquisar pressionando Enter
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        showImpact();
    }
});


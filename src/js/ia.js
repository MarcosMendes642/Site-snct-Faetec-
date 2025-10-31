const images = [
    { id: 1, isReal: true, filename: './imagens/real-baixaqualidade.jpg' },
    { id: 2, isReal: false, filename: './imagens/falsa-loirafut.jpg' },
    { id: 3, isReal: false, filename: './imagens/falso-luav.jpg' },
    { id: 4, isReal: true, filename: './imagens/real-makeup.jpeg' },
    { id: 5, isReal: true, filename: './imagens/real-foto.jpg' },
    { id: 6, isReal: false, filename: './imagens/falso-mak.jpg' },
    { id: 7, isReal: false, filename: './imagens/real-liderrtorcida.jpg' },
    { id: 8, isReal: true, filename: './imagens/real-l.jpg' },
    { id: 9, isReal: false, filename: './imagens/falso-mul.jpg' },
    { id: 10, isReal: false, filename: './imagens/modelo-falsa.jpeg' }
];

let correctCount = 0;
let wrongCount = 0;
let votedCount = 0;
let currentImageIndex = 0;

function initGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'flex';
    gallery.style.justifyContent = 'center';
    gallery.style.alignItems = 'center';
    
    showCurrentImage();
}

function showCurrentImage() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    if (currentImageIndex >= images.length) {
        showFinalResults();
        return;
    }
    
    const img = images[currentImageIndex];
    const card = document.createElement('div');
    card.className = 'image-card';
    card.style.maxWidth = '500px';
    card.style.width = '100%';
    
    card.innerHTML = `
        <div class="image-placeholder">
            <img src="${img.filename}" alt="Imagem ${img.id}" style="width: 100%; height: 100%; object-fit: cover;">
            <div id="feedback-animation" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 3rem; font-weight: 800; opacity: 0; transition: all 0.5s ease; pointer-events: none;"></div>
        </div>
        <div class="vote-buttons">
            <button class="vote-btn real" onclick="vote(true)">
                REAL
            </button>
            <button class="vote-btn fake" onclick="vote(false)">
                FAKE
            </button>
        </div>
    `;
    
    gallery.appendChild(card);
}

function vote(userVote) {
    const image = images[currentImageIndex];
    const card = document.querySelector('.image-card');
    const buttons = card.querySelectorAll('.vote-btn');
    const feedback = document.getElementById('feedback-animation');
    
    buttons[0].disabled = true;
    buttons[1].disabled = true;
    
    card.classList.add('voted');
    
    const isCorrect = userVote === image.isReal;
    
    if (isCorrect) {
        correctCount++;
        card.classList.add('correct');
        feedback.style.color = '#00ff64';
        feedback.style.opacity = '1';
        feedback.style.transform = 'translate(-50%, -50%) scale(1.2)';
    } else {
        wrongCount++;
        card.classList.add('wrong');
        feedback.style.color = '#ff3232';
        feedback.style.opacity = '1';
        feedback.style.transform = 'translate(-50%, -50%) scale(1.2)';
    }
    
    votedCount++;
    updateScores();
    
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translate(-50%, -50%) scale(0.8)';
    }, 2500);
    
    setTimeout(() => {
        nextImage();
    }, 1700);
}

function nextImage() {
    currentImageIndex++;
    showCurrentImage();
    
    const gallery = document.getElementById('gallery');
    gallery.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateScores() {
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
}

function showFinalResults() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'none';
    
    const finalResults = document.getElementById('finalResults');
    const percentage = (correctCount / 10) * 100;
    
    document.getElementById('finalScore').textContent = `${correctCount}/10`;
    
    let message = '';
    if (correctCount === 10) {
        message = 'PERFEITO! Você é especialista em detectar deepfakes!';
    } else if (correctCount >= 8) {
        message = 'Excelente! Você tem bom olho para identificar fakes!';
    } else if (correctCount >= 6) {
        message = 'Bom! Você acertou mais da metade!';
    } else if (correctCount >= 4) {
        message = 'Regular. Deepfakes são difíceis mesmo!';
    } else {
        message = 'Difícil, não é? É por isso que deepfakes são tão perigosos!';
    }
    
    message += `<br><br>Você acertou ${percentage}% das imagens. A maioria das pessoas erra 50% ou mais.`;
    
    document.getElementById('finalMessage').innerHTML = message;
    finalResults.classList.add('show');
    finalResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

initGallery();
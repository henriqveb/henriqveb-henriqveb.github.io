let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
        dots[i].classList.remove('active');
    });
    
    dots[slideIndex].classList.add('active');
}

function moveSlide(step) {
    showSlide(slideIndex += step);
}

// Cria os pontinhos
function createDots() {
    const dotsContainer = document.querySelector('.dots');
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    });
    
    // Ativa o primeiro pontinho
    document.querySelector('.dot').classList.add('active');
}

// Inicializa o slider exibindo o primeiro slide
document.addEventListener('DOMContentLoaded', () => {
    createDots();
    showSlide(slideIndex);
});
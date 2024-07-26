let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Show the first slide initially
showSlide(slideIndex);














const toggleButton = document.getElementById('navbar-toggle');
const menu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});








document.getElementById('openModal').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contactModal').classList.remove('hidden');
});

// Fechar o modal
function closeModal() {
    document.getElementById('contactModal').classList.add('hidden');
}

document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('closeModalFooter').addEventListener('click', closeModal);

// Fechar o modal se clicar fora do conteúdo do modal
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('contactModal')) {
        closeModal();
    }
});

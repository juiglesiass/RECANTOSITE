// === Rolagem suave para âncoras ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Slider de Gastronomia (se existir) ===
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function goToSlide(index) {
  showSlide(index);
}

// === Scroll desacelerado na seção de Avaliações ===
gsap.registerPlugin(ScrollTrigger);

const depoimentos = document.querySelector('.depoimentos');
const quantidadeDepoimentos = document.querySelectorAll('.depoimento').length;
const larguraDepoimento = 320.88 + 30; // largura + gap

const deslocamentoTotal = larguraDepoimento * (quantidadeDepoimentos - 1);

gsap.to(depoimentos, {
  x: -deslocamentoTotal,
  ease: "none",
  scrollTrigger: {
    trigger: "#avaliacoes",
    start: "center center",
    end: `+=${deslocamentoTotal}`,
    scrub: 1.5,
    pin: true,
    anticipatePin: 1,
  }
});


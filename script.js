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

gsap.fromTo(depoimentos, 
  { x: 0 }, 
  {
    x: -480, // valor ajustável dependendo da quantidade de depoimentos
    scrollTrigger: {
      trigger: "#avaliacoes",
      start: "top 70%",
      end: "bottom top",
      scrub: 2,
    },
    ease: "power2.out"
  }
);

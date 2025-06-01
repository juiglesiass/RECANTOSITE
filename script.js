// Swiper Carrosel em Espaco
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  freeMode: true,
  speed:7000,
  slidesPerView:"auto",
  autoplay: {
        delay: 0,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Registra o plugin ScrollTrigger só uma vez
gsap.registerPlugin(ScrollTrigger);

// === Rolagem suave para âncoras ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    if (id && id !== "#") {
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// === Scroll desacelerado na seção de Avaliações ===
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

// === Função para animação GSAP sequencial para vários grupos ===
function animaScroll(classe, delay = 0.3, startTrigger = "top 85%") {
  gsap.utils.toArray(classe).forEach((el, i) => {
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: i * delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: startTrigger,
          toggleActions: "play none none none",
        }
      });
  });
}



// Animações em grupos
animaScroll('.anim-hero', 0.3, "top 80%");
animaScroll('.anim-gastro', 0.3, "top 85%");
animaScroll('.anim-espaco', 0.2, "top 85%");

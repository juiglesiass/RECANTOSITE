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

// GSAP Hero
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.anim-hero').forEach((el, i) => {
  gsap.fromTo(el,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: i * 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
});

// GSAP Gastronomia
gsap.utils.toArray('.anim-gastro').forEach((el, i) => {
  gsap.fromTo(el,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: i * 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
});

// GSAP Espaço
gsap.utils.toArray('.anim-espaco').forEach((el, i) => {
  gsap.fromTo(el,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: i * 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
});




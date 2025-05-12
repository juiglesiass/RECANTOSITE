// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Slider de Gastronomia (se existir)
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

// === Seção de Avaliações ===
const avaliacoesSlider = document.querySelector('.avaliacoes-slider');
const avaliacoes = document.querySelectorAll('.avaliacao');
const contador = document.getElementById('contador');

let scrollStartY = null;
let scrollPosition = 0;
let animado = false;

function animarContador() {
  let valor = 0;
  const intervalo = setInterval(() => {
    contador.textContent = valor + '%';
    if (valor >= 100) {
      clearInterval(intervalo);
    }
    valor++;
  }, 25);
}

function mapearScrollParaDeslizamento(scrollDelta) {
  const maxScroll = 300; // distância de rolagem onde a animação atua
  const progresso = Math.min(scrollDelta / maxScroll, 1);
  avaliacoesSlider.style.transform = `translateX(-${progresso * (avaliacoes.length - 1) * 100}vw)`;
}

window.addEventListener('scroll', () => {
  const secao = document.querySelector('#avaliacoes');
  const rect = secao.getBoundingClientRect();
  const start = window.innerHeight * 0.7;

  if (rect.top < start && rect.bottom > 0) {
    if (!animado) {
      animado = true;
      animarContador();
    }

    if (scrollStartY === null) {
      scrollStartY = window.scrollY;
    }

    const scrollDelta = window.scrollY - scrollStartY;
    mapearScrollParaDeslizamento(scrollDelta);
  } else {
    scrollStartY = null;
  }
});

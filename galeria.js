// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var galleryImages = document.querySelectorAll(".fotos-galeria img");
  var currentIndex = 0;

  // Adiciona cursor pointer nas imagens da galeria
  galleryImages.forEach(function(img) {
    img.style.cursor = 'pointer';
  });

  // Adiciona evento de clique para cada imagem da galeria
  for (var i = 0; i < galleryImages.length; i++) {
    var img = galleryImages[i];
    img.onclick = function(evt) {
      modal.style.display = "block";
      modalImg.src = this.src;
      currentIndex = Array.prototype.indexOf.call(galleryImages, this);
    }
  }

  // Botão de fechar
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Fechar modal clicando fora da imagem
  modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Navegação com teclado
  document.addEventListener('keydown', function(event) {
    if (modal.style.display === "block") {
      if (event.key === 'ArrowLeft') {
        plusSlides(-1);
      } else if (event.key === 'ArrowRight') {
        plusSlides(1);
      } else if (event.key === 'Escape') {
        modal.style.display = "none";
      }
    }
  });

  // Função para navegar entre as imagens
  function plusSlides(n) {
    showSlides(currentIndex += n);
  }

  // Função para mostrar a imagem atual
  function showSlides(n) {
    if (n >= galleryImages.length) {
      currentIndex = 0;
    }
    if (n < 0) {
      currentIndex = galleryImages.length - 1;
    }
    modalImg.src = galleryImages[currentIndex].src;
  }

  // Torna as funções globais para os botões HTML
  window.plusSlides = plusSlides;
  window.showSlides = showSlides;
});


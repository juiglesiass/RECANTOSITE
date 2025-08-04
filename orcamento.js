// orcamento.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact_form");

  form.addEventListener("submit", function (e) {
    const nome = form.fnome.value.trim();
    const email = form.femail.value.trim();

    if (!nome || !email) {
      alert("Por favor, preencha os campos obrigatórios de Nome e E-mail.");
      e.preventDefault();
    }
  });
});

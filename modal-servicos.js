// Conteúdo dos modais de serviços
const servicosContent = {
  sonorizacao: {
    title: "Sonorização",
    content: `
      <h3>Estrutura Completa</h3>
      <p>Oferecemos um amplo espaço equipado com equipamentos de som e iluminação de alta qualidade. Contamos com um DJ experiente e envolvente, que se dedica a tornar a festa memorável, atendendo plenamente aos desejos dos noivos em relação à música.</p>
      
      <h3>Cobertura Completa</h3>
      <p>Nossa equipe está preparada para cobrir todas as etapas da festa, proporcionando uma experiência completa:</p>
      
      <p><strong>Cerimônia:</strong> Cuidamos minuciosamente da preparação do som e dos microfones para a cerimônia, garantindo que cada palavra seja ouvida com perfeição e emoção.</p>
      
      <p><strong>Jantar/Almoço:</strong> No salão principal, durante o jantar ou almoço, criamos uma atmosfera musical envolvente, proporcionando uma trilha sonora agradável e harmoniosa, que acompanha os momentos de refeição de forma sutil e elegante.</p>
      
      <p><strong>Pista de Dança:</strong> A nossa pista de dança é o ponto alto da festa, onde a diversão é garantida. O DJ cria uma playlist personalizada, baseada nas preferências dos noivos, garantindo que todos os convidados sejam contagiados pelo ritmo e se divirtam a noite toda.</p>
    `
  },
  
  buffet: {
    title: "Buffet",
    content: `
      <h3>Opções de Cardápio</h3>
      <p>São 4 opções de cardápio para sua escolha: <strong>Massas, Churrasco, Comidinhas e Menu do Chef</strong>.</p>
      
      <h3>Serviço Franco-Americano</h3>
      <p>As entradas são servidas nas mesas pelos garçons e o prato principal em uma ilha gastronômica com o auxílio de ajudantes de cozinha.</p>
      
      <h3>Incluso no Serviço</h3>
      <p><strong>Equipe de cozinha:</strong> chef, cozinheiros, saladeiras, auxiliares</p>
      <p><strong>Equipe de atendimento:</strong> maitre, garçons</p>
      <p><strong>Equipe de limpeza:</strong> para todos os ambientes</p>
      <p><strong>Utensílios:</strong> pratos de vidro, talheres de inox, taças de vidro, etc.</p>
      
      <h3>Nosso Diferencial</h3>
      <p>Comida brasileira e quentinha. Mantemos com atenção os fogareiros bem acesos, garantindo que todos os pratos sejam servidos na temperatura ideal.</p>
    `
  },
  
  acessoria: {
    title: "Assessoria",
    content: `
      <h3>Antes do Casamento</h3>
      <p><strong>Suporte Personalizado:</strong> Para dúvidas e sugestões de outros fornecedores os noivos terão acesso ao assessor chefe.</p>
      
      <p><strong>Plataforma Digital:</strong> Site para cadastro de todos os convidados e para as confirmações automáticas via e-mail e WhatsApp.</p>
      
      <p><strong>Planejamento Detalhado:</strong> Reunião 30 dias antes do evento para tratar de todos os detalhes do casamento.</p>
      
      <p><strong>Projeto Personalizado:</strong> Apresentação do pré-projeto para cerimônia e cronograma geral da festa.</p>
      
      <p><strong>Acompanhamento:</strong> Relatório semanal (toda segunda feira) com a contagem regressiva para o casamento, informações do número de convidados cadastrados e tarefas a serem realizadas.</p>
      
      <h3>No Dia do Casamento</h3>
      <p><strong>Check-in Digital:</strong> Recepção através de check-in via aplicativo de todos os convidados cadastrados.</p>
      
      <p><strong>Acessibilidade:</strong> Orientação da melhor forma de desembarque em local apropriado para os com mobilidade reduzida e cadeirantes.</p>
      
      <p><strong>Mesa de Cortesia:</strong> Preparação da mesa de cortesia para a recepção dos convidados (com café, biscoitos e refresco).</p>
      
      <p><strong>Coordenação Completa:</strong> Orientação do cerimonial aos pais e padrinhos, coordenação do pós-cerimônia, assistência aos noivos durante todo o evento e organização final.</p>
    `
  },
  
  decoracao: {
    title: "Decoração",
    content: `
      <h3>Conceito Rústico-Contemporâneo</h3>
      <p>A decoração mistura elementos do passado e do presente, combinando o rústico com o contemporâneo. Revestimentos antigos e desgastados dão à decoração uma aparência nostálgica, lembrando casas antigas, fazendas e sítios, criando um ambiente encantador.</p>
      
      <h3>Filosofia Natural</h3>
      <p>A beleza natural, feita pela natureza divina, complementa tudo isso. O aspecto rústico é aprimorado com um toque chique, tornando o que antes era simples e grosseiro mais refinado e atraente, sem perder a beleza e o estilo do passado.</p>
      
      <h3>Elementos Únicos</h3>
      <p>Essa combinação de diferentes elementos, como objetos, flores do campo e cores, reflete a personalidade única do espaço. A elegância surge da busca pelo que é natural, simples e acolhedor, sem exageros, criando um ambiente confortável e moderno ao mesmo tempo.</p>
      
      <h3>Aplicação no Recanto</h3>
      <p><strong>Cerimônia:</strong> Flores e folhagens, passarela e pergolado de madeira com toque rústico.</p>
      
      <p><strong>Mesa Principal:</strong> Móveis rústicos, vasos, paredes de pedra e outros elementos especiais, complementados pelos detalhes dos noivos.</p>
      
      <p><strong>Salão Principal:</strong> Mesas dos convidados decoradas com requinte, mantendo o estilo do casal.</p>
      
      <p><strong>Detalhes Especiais:</strong> Itens decorativos adicionais no jardim, lareira e lounges tornam tudo ainda mais memorável.</p>
    `
  }
};

// Função para abrir o modal
function openModal(servico) {
  const modal = document.getElementById('modal-overlay');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  
  if (servicosContent[servico]) {
    title.textContent = servicosContent[servico].title;
    body.innerHTML = servicosContent[servico].content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  }
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restaura scroll do body
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Botão de fechar
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Fechar ao clicar no overlay
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }
  
  // Fechar com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Conectar botões "Saiba Mais" aos modais
  const buttons = document.querySelectorAll('.btn-cards');
  buttons.forEach((button, index) => {
    const servicos = ['sonorizacao', 'buffet', 'acessoria', 'decoracao'];
    button.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(servicos[index]);
    });
  });
});


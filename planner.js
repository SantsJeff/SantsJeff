// Selecionando todos os formulários na página
const forms = document.querySelectorAll('form');

// Adicionando um evento de envio de formulário para cada formulário
forms.forEach(form => {
  form.addEventListener('submit', event => {
    // Previne o envio do formulário padrão
    event.preventDefault();

    // Seleciona o input e o valor do texto inserido nele
    const input = form.querySelector('input[type="text"]');
    const value = input.value;

    // Seleciona a seção pai e a lista ul
    const section = form.closest('section');
    const ul = section.querySelector('ul');

    // Cria um novo elemento li, um checkbox e um rótulo para ele
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = value;

    // Cria um botão de remoção e adiciona um evento de clique a ele
    const button = document.createElement('button');
    button.textContent = 'Remover';
    button.classList.add('remover');
    button.addEventListener('click', () => {
      li.remove();
    });

    // Adiciona o checkbox, o rótulo e o botão à li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);

    // Adiciona a li à lista ul
    ul.appendChild(li);

    // Limpa o input do formulário
    input.value = '';
  });
});

// Adicionando um evento de clique a todos os botões de remover na página
const buttons = document.querySelectorAll('.remover');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('li').remove();
  });
});

window.addEventListener('scroll', function() {
  const btnTopo = document.getElementById('btnTopo');
  if (window.pageYOffset > 100) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

document.getElementById('btnTopo').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

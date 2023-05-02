// Seleciona o input e o valor do texto inserido nele
const input = form.querySelector('input[type="text"]');
const value = input.value;

// Salva o valor no localStorage
localStorage.setItem('inputValue', value);

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

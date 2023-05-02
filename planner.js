import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  // configurações do seu projeto Firebase
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Selecionando todos os formulários na página
const forms = document.querySelectorAll('form');

// Adicionando um evento de envio de formulário para cada formulário
forms.forEach(form => {
  form.addEventListener('submit', async event => {
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

    // Adiciona um novo documento à coleção "tarefas" do Firestore com o valor do input
    try {
      const docRef = await addDoc(collection(db, "tarefas"), {
        nome: value,
        feito: false
      });
      console.log("Documento adicionado com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }

    // Limpa o input do formulário
    input.value = '';
  });
});

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  // configurações do seu projeto Firebase
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function adicionarItem(form) {
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const input = form.querySelector('input[type="text"]');
    const value = input.value.trim();

    if (!value) {
      return;
    }

    const section = form.closest('section');
    const ul = section.querySelector('ul');

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = value;

    const button = document.createElement('button');
    button.textContent = 'Remover';
    button.classList.add('remover');
    button.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);

    ul.appendChild(li);

    try {
      const docRef = await addDoc(collection(db, "tarefas"), {
        nome: value,
        feito: false
      });
      console.log("Documento adicionado com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }

    input.value = '';
  });
}

const forms = document.querySelectorAll('form');
forms.forEach(adicionarItem);

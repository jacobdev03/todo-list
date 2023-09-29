import { createTodo } from './createTodo';
import { projects } from './index';
import displayTodos from './displayTodos';

export default function todoForm(project = projects[0]) {
  const form = document.createElement('form');
  const addBtn = document.createElement('button');
  const plusIcon = document.createElement('i');
  const addInput = document.createElement('input');

  addBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
  addInput.placeholder = 'Add new task';
  form.classList.add('addTodoForm');
  plusIcon.classList.add('fa-solid', 'fa-circle-plus');

  form.appendChild(addBtn);
  form.appendChild(addInput);
  form.addEventListener('submit', (e) => handleCreate(e, project));
  console.log(project);

  return form;
}

function handleCreate(e, project) {
  e.preventDefault();
  if (!e.target[1].value) {
    alert("Todo title can't be empty");
    return;
  }
  const newTodo = createTodo(e.target[1].value, 'test', 'tommorow', 'urgent');
  project.addTodo(newTodo);
  if (project.title !== 'All') {
    projects[0].addTodo(newTodo);
  }
  displayTodos(project.listTodos());
}

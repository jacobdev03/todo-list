import { createTodo } from './createTodo';
import { projects } from './index';
import displayTodos from './displayTodos';

export default function todoForm(project) {
  const form = document.createElement('form');
  const addBtn = document.createElement('button');
  const plusIcon = document.createElement('i');
  const addInput = document.createElement('input');
  const dateInput = document.createElement('input');
  dateInput.type = 'date';

  addBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
  addInput.placeholder = 'Add new task';
  form.classList.add('addTodoForm');
  plusIcon.classList.add('fa-solid', 'fa-circle-plus');

  form.appendChild(addBtn);
  form.appendChild(addInput);
  form.appendChild(dateInput);
  form.addEventListener('submit', (e) => handleCreate(e, project));
  console.log(project);

  return form;
}

function handleCreate(e, project) {
  const title = e.target[1].value;
  const dueDate = e.target[2].value;
  e.preventDefault();
  if (!title) {
    alert("Todo title can't be empty");
    return;
  }
  const newTodo = createTodo(title, 'test description', dueDate, 'urgent', false, project);
  project.addTodo(newTodo);

  displayTodos(project.listTodos());
}

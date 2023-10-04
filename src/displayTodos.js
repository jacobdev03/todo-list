import todoForm from './todoForm';
import { projects } from './index';

export default function displayTodos(todos, project) {
  const todoContainer = document.querySelector('.todo-container');
  todoContainer.innerHTML = '';
  todos.forEach((todo, index) => {
    const newTodoDiv = createTodoDiv(todo, index);
    todoContainer.appendChild(newTodoDiv);
  });
  todoContainer.appendChild(todoForm(project));
}

function createTodoDiv(todo, index) {
  const todoDiv = document.createElement('div');
  const circle = document.createElement('i');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const textDiv = document.createElement('div');
  const titleText = document.createElement('h3');
  const dueDateText = document.createElement('p');
  titleText.textContent = todo.title;
  dueDateText.textContent = todo.dueDate;
  textDiv.appendChild(titleText);
  textDiv.appendChild(dueDateText);
  todoDiv.classList.add('todo');
  textDiv.classList.add('todo-info');
  circle.classList.add('fa-regular');
  editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  deleteBtn.addEventListener('click', (e) => handleDelete(e, todo.project));
  editBtn.addEventListener('click', (e) => handleEdit(e, todo));

  if (todo.isCompleted) {
    circle.classList.toggle('fa-circle-check');
    textDiv.classList.toggle('cross-line');
  } else {
    circle.classList.toggle('fa-circle');
  }
  circle.addEventListener('click', () => {
    circle.classList.toggle('fa-circle');
    circle.classList.toggle('fa-circle-check');
    textDiv.classList.toggle('cross-line');
    todo.toggleCompleted();
  });

  todoDiv.appendChild(circle);

  todoDiv.appendChild(textDiv);
  todoDiv.appendChild(editBtn);
  todoDiv.appendChild(deleteBtn);
  todoDiv.id = index;

  return todoDiv;
}

function editForm(title, date, todo) {
  const formContainer = document.querySelector('.form-container');
  formContainer.innerHTML = '';
  formContainer.style.display = 'block';
  const form = document.createElement('form');
  const textInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'Edit';
  textInput.value = title;
  dateInput.value = date;

  dateInput.type = 'date';
  form.appendChild(textInput);
  form.appendChild(dateInput);
  form.appendChild(button);
  formContainer.classList.add('form-container');
  formContainer.appendChild(form);
  document.body.appendChild(formContainer);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    todo.editTodo(textInput.value, dateInput.value);
    formContainer.style.display = 'none';
    displayTodos(todo.project.listTodos(), todo.project);
  });
}

function handleDelete(e, todoProject) {
  console.log(todoProject);
  console.log(e.currentTarget.parentElement.id);

  const deleteTodo = todoProject
    .listTodos()
    .find((todo, index) => index == e.currentTarget.parentElement.id);

  projects.forEach((proj) => {
    const newTodos = proj.listTodos().filter((todo) => todo !== deleteTodo);
    proj.setNewTodos(newTodos);
  });

  displayTodos(todoProject.listTodos(), todoProject);
}

function handleEdit(e, todo) {
  const title = e.currentTarget.parentElement.children[1].children[0].textContent;
  const date = e.currentTarget.parentElement.children[1].children[1].textContent;
  editForm(title, date, todo);
}

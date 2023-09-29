import todoForm from './todoForm';

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
  const todoText = document.createElement('p');
  todoText.textContent = todo.title;
  todoDiv.classList.add('todo');
  circle.classList.add('fa-regular');

  if (todo.isCompleted) {
    circle.classList.toggle('fa-circle-check');
    todoText.classList.toggle('cross-line');
  } else {
    circle.classList.toggle('fa-circle');
  }
  todoDiv.addEventListener('click', () => {
    circle.classList.toggle('fa-circle');
    circle.classList.toggle('fa-circle-check');
    todoText.classList.toggle('cross-line');
    todo.toggleCompleted();
  });

  todoDiv.appendChild(circle);
  todoDiv.appendChild(todoText);

  return todoDiv;
}

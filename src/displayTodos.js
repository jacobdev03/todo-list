export default function (todos) {
  const todoContainer = document.querySelector('.todo-container');
  todos.forEach((todo) => {
    const newTodoDiv = createTodoDiv(todo);
    todoContainer.appendChild(newTodoDiv);
  });
}

function createTodoDiv(todo) {
  const todoDiv = document.createElement('div');
  todoDiv.innerHTML = `
    <h2>${todo.title}</h2>
  `;
  return todoDiv;
}

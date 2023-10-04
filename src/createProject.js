class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  listTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  setNewTodos(todos) {
    this.todos = todos;
  }
}

function createProject(title) {
  return new Project(title);
}

export { Project, createProject };

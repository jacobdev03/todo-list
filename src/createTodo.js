class Todo {
  constructor(title, description, dueDate, priority, isCompleted = false, project = 'all') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.project = project;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}

function createTodo(title, description, dueDate, priority, isCompleted = false, project = 'all') {
  return new Todo(title, description, dueDate, priority, isCompleted, project);
}

export { Todo, createTodo };

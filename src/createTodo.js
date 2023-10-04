class Todo {
  constructor(title, description, dueDate, priority, isCompleted = false, project) {
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

  editTodo(newTitle, newDate) {
    this.title = newTitle;
    this.dueDate = newDate;
  }
}

function createTodo(title, description, dueDate, priority, isCompleted = false, project) {
  return new Todo(title, description, dueDate, priority, isCompleted, project);
}

export { Todo, createTodo };

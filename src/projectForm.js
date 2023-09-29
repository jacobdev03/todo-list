import { createProject } from './createProject';
import displayNav from './navigation';
import displayTodos from './displayTodos';
import { projects } from './index';

export default function projectForm() {
  const form = document.createElement('form');
  const addBtn = document.createElement('button');
  const plusIcon = document.createElement('i');
  const addInput = document.createElement('input');

  addBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
  addInput.placeholder = 'Add new project';
  form.classList.add('addTodoForm');
  plusIcon.classList.add('fa-solid', 'fa-circle-plus');

  form.appendChild(addBtn);
  form.appendChild(addInput);
  form.addEventListener('submit', (e) => handleCreate(e));

  return form;
}

function handleCreate(e) {
  e.preventDefault();
  if (!e.target[1].value) {
    alert("Project name can't be empty");
    return;
  }
  const newProject = createProject(e.target[1].value);
  projects.push(newProject);

  displayNav(projects);
  displayTodos(newProject.listTodos(), newProject);
}

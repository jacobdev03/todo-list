import displayTodos from './displayTodos';
import projectForm from './projectForm';

const todoContainer = document.querySelector('.todo-container');

export default function displayNav(projects) {
  const sideBar = document.querySelector('.side-bar');
  sideBar.innerHTML = '';
  sideBar.appendChild(displayProjects(projects));
  sideBar.appendChild(projectForm());
}

function displayProjects(projects) {
  const projectList = document.createElement('ul');

  projects.forEach((project) => {
    const listElement = document.createElement('li');
    const buttonElement = document.createElement('button');
    buttonElement.textContent = project.title;
    buttonElement.addEventListener('click', () => handleClick(project));
    listElement.appendChild(buttonElement);
    projectList.appendChild(listElement);
  });
  return projectList;
}

function handleClick(project) {
  todoContainer.innerHTML = '';
  const todos = project.listTodos();
  displayTodos(todos, project);
}

export { displayProjects };

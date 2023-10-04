import { createTodo } from './createTodo';
import { createProject } from './createProject';
import displayTodos from './displayTodos';
import displayNav from './navigation';

const projects = [];

const allProject = createProject('All');
const schoolProject = createProject('School');

const sampleTodo1 = createTodo('Do homework', 'test', '2023-09-09', 'urgent', false, schoolProject);
const sampleTodo2 = createTodo('Do dishes', 'test', '2023-09-09', 'urgent', false, allProject);

schoolProject.addTodo(sampleTodo1);
allProject.addTodo(sampleTodo2);

projects.push(allProject);
projects.push(schoolProject);

displayTodos(allProject.listTodos());
displayNav(projects);

let jsonProjects = JSON.stringify(projects);
localStorage.setItem('projects', jsonProjects);

export { projects };

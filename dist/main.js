/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
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




/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
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
  localStorage.setItem(`${title}`, 'sdfds');
  return new Todo(title, description, dueDate, priority, isCompleted, project);
}




/***/ }),

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodos)
/* harmony export */ });
/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm */ "./src/todoForm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");



function displayTodos(todos, project) {
  const todoContainer = document.querySelector('.todo-container');
  todoContainer.innerHTML = '';
  todos.forEach((todo, index) => {
    const newTodoDiv = createTodoDiv(todo, index);
    todoContainer.appendChild(newTodoDiv);
  });
  todoContainer.appendChild((0,_todoForm__WEBPACK_IMPORTED_MODULE_0__["default"])(project));
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

  _index__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((proj) => {
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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");





const projects = [];

const allProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)('All');
const schoolProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)('School');

const sampleTodo1 = (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__.createTodo)('Do homework', 'test', '2023-09-09', 'urgent', false, schoolProject);
const sampleTodo2 = (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__.createTodo)('Do dishes', 'test', '2023-09-09', 'urgent', false, allProject);

schoolProject.addTodo(sampleTodo1);
allProject.addTodo(sampleTodo2);

projects.push(allProject);
projects.push(schoolProject);

(0,_displayTodos__WEBPACK_IMPORTED_MODULE_2__["default"])(allProject.listTodos());
(0,_navigation__WEBPACK_IMPORTED_MODULE_3__["default"])(projects);

let jsonProjects = JSON.stringify(projects);
localStorage.setItem('projects', jsonProjects);




/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNav),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm */ "./src/projectForm.js");



const todoContainer = document.querySelector('.todo-container');

function displayNav(projects) {
  const sideBar = document.querySelector('.side-bar');
  sideBar.innerHTML = '';
  sideBar.appendChild(displayProjects(projects));
  sideBar.appendChild((0,_projectForm__WEBPACK_IMPORTED_MODULE_1__["default"])());
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
  (0,_displayTodos__WEBPACK_IMPORTED_MODULE_0__["default"])(todos, project);
}




/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





function projectForm() {
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
  const newProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)(e.target[1].value);
  console.log(newProject);
  _index__WEBPACK_IMPORTED_MODULE_3__.projects.push(newProject);

  (0,_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])(_index__WEBPACK_IMPORTED_MODULE_3__.projects);
  (0,_displayTodos__WEBPACK_IMPORTED_MODULE_2__["default"])(newProject.listTodos(), newProject);
}


/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoForm)
/* harmony export */ });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");




function todoForm(project) {
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
  const newTodo = (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title, 'test description', dueDate, 'urgent', false, project);
  project.addTodo(newTodo);

  (0,_displayTodos__WEBPACK_IMPORTED_MODULE_2__["default"])(project.listTodos());
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQVU7QUFDNUI7QUFDQTtBQUNBLEVBQUUseURBQVk7QUFDZDs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG4gIGxpc3RUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICBzZXROZXdUb2Rvcyh0b2Rvcykge1xyXG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xyXG4gIHJldHVybiBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIGNyZWF0ZVByb2plY3QgfTtcclxuIiwiY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQgPSBmYWxzZSwgcHJvamVjdCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gIXRoaXMuaXNDb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuICBlZGl0VG9kbyhuZXdUaXRsZSwgbmV3RGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQgPSBmYWxzZSwgcHJvamVjdCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RpdGxlfWAsICdzZGZkcycpO1xyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCwgcHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRvZG8sIGNyZWF0ZVRvZG8gfTtcclxuIiwiaW1wb3J0IHRvZG9Gb3JtIGZyb20gJy4vdG9kb0Zvcm0nO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHRvZG9zLCBwcm9qZWN0KSB7XHJcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xyXG4gIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9EaXYgPSBjcmVhdGVUb2RvRGl2KHRvZG8sIGluZGV4KTtcclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0Rpdik7XHJcbiAgfSk7XHJcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRm9ybShwcm9qZWN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9EaXYodG9kbywgaW5kZXgpIHtcclxuICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcclxuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5mbycpO1xyXG4gIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJyk7XHJcbiAgZWRpdEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmVcIj48L2k+JztcclxuICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+JztcclxuXHJcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZURlbGV0ZShlLCB0b2RvLnByb2plY3QpKTtcclxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZUVkaXQoZSwgdG9kbykpO1xyXG5cclxuICBpZiAodG9kby5pc0NvbXBsZXRlZCkge1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWNpcmNsZS1jaGVjaycpO1xyXG4gICAgdGV4dERpdi5jbGFzc0xpc3QudG9nZ2xlKCdjcm9zcy1saW5lJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNpcmNsZS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1jaXJjbGUnKTtcclxuICB9XHJcbiAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWNpcmNsZScpO1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWNpcmNsZS1jaGVjaycpO1xyXG4gICAgdGV4dERpdi5jbGFzc0xpc3QudG9nZ2xlKCdjcm9zcy1saW5lJyk7XHJcbiAgICB0b2RvLnRvZ2dsZUNvbXBsZXRlZCgpO1xyXG4gIH0pO1xyXG5cclxuICB0b2RvRGl2LmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgdG9kb0Rpdi5pZCA9IGluZGV4O1xyXG5cclxuICByZXR1cm4gdG9kb0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEZvcm0odGl0bGUsIGRhdGUsIHRvZG8pIHtcclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbiAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcclxuICB0ZXh0SW5wdXQudmFsdWUgPSB0aXRsZTtcclxuICBkYXRlSW5wdXQudmFsdWUgPSBkYXRlO1xyXG5cclxuICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICBmb3JtLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0b2RvLmVkaXRUb2RvKHRleHRJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRpc3BsYXlUb2Rvcyh0b2RvLnByb2plY3QubGlzdFRvZG9zKCksIHRvZG8ucHJvamVjdCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZShlLCB0b2RvUHJvamVjdCkge1xyXG4gIGNvbnNvbGUubG9nKHRvZG9Qcm9qZWN0KTtcclxuICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5pZCk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSB0b2RvUHJvamVjdFxyXG4gICAgLmxpc3RUb2RvcygpXHJcbiAgICAuZmluZCgodG9kbywgaW5kZXgpID0+IGluZGV4ID09IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kb3MgPSBwcm9qLmxpc3RUb2RvcygpLmZpbHRlcigodG9kbykgPT4gdG9kbyAhPT0gZGVsZXRlVG9kbyk7XHJcbiAgICBwcm9qLnNldE5ld1RvZG9zKG5ld1RvZG9zKTtcclxuICB9KTtcclxuXHJcbiAgZGlzcGxheVRvZG9zKHRvZG9Qcm9qZWN0Lmxpc3RUb2RvcygpLCB0b2RvUHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVkaXQoZSwgdG9kbykge1xyXG4gIGNvbnN0IHRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgZGF0ZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gIGVkaXRGb3JtKHRpdGxlLCBkYXRlLCB0b2RvKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi9jcmVhdGVUb2RvJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XHJcbmltcG9ydCBkaXNwbGF5VG9kb3MgZnJvbSAnLi9kaXNwbGF5VG9kb3MnO1xyXG5pbXBvcnQgZGlzcGxheU5hdiBmcm9tICcuL25hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbmNvbnN0IGFsbFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdBbGwnKTtcclxuY29uc3Qgc2Nob29sUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ1NjaG9vbCcpO1xyXG5cclxuY29uc3Qgc2FtcGxlVG9kbzEgPSBjcmVhdGVUb2RvKCdEbyBob21ld29yaycsICd0ZXN0JywgJzIwMjMtMDktMDknLCAndXJnZW50JywgZmFsc2UsIHNjaG9vbFByb2plY3QpO1xyXG5jb25zdCBzYW1wbGVUb2RvMiA9IGNyZWF0ZVRvZG8oJ0RvIGRpc2hlcycsICd0ZXN0JywgJzIwMjMtMDktMDknLCAndXJnZW50JywgZmFsc2UsIGFsbFByb2plY3QpO1xyXG5cclxuc2Nob29sUHJvamVjdC5hZGRUb2RvKHNhbXBsZVRvZG8xKTtcclxuYWxsUHJvamVjdC5hZGRUb2RvKHNhbXBsZVRvZG8yKTtcclxuXHJcbnByb2plY3RzLnB1c2goYWxsUHJvamVjdCk7XHJcbnByb2plY3RzLnB1c2goc2Nob29sUHJvamVjdCk7XHJcblxyXG5kaXNwbGF5VG9kb3MoYWxsUHJvamVjdC5saXN0VG9kb3MoKSk7XHJcbmRpc3BsYXlOYXYocHJvamVjdHMpO1xyXG5cclxubGV0IGpzb25Qcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywganNvblByb2plY3RzKTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RzIH07XHJcbiIsImltcG9ydCBkaXNwbGF5VG9kb3MgZnJvbSAnLi9kaXNwbGF5VG9kb3MnO1xyXG5pbXBvcnQgcHJvamVjdEZvcm0gZnJvbSAnLi9wcm9qZWN0Rm9ybSc7XHJcblxyXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TmF2KHByb2plY3RzKSB7XHJcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xyXG4gIHNpZGVCYXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpKTtcclxuICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpIHtcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUNsaWNrKHByb2plY3QpKTtcclxuICAgIGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2socHJvamVjdCkge1xyXG4gIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0Lmxpc3RUb2RvcygpO1xyXG4gIGRpc3BsYXlUb2Rvcyh0b2RvcywgcHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcclxuaW1wb3J0IGRpc3BsYXlOYXYgZnJvbSAnLi9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IGRpc3BsYXlUb2RvcyBmcm9tICcuL2Rpc3BsYXlUb2Rvcyc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgYWRkQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1wbHVzXCI+PC9pPic7XHJcbiAgYWRkSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIG5ldyBwcm9qZWN0JztcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZFRvZG9Gb3JtJyk7XHJcbiAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLXBsdXMnKTtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYWRkSW5wdXQpO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGhhbmRsZUNyZWF0ZShlKSk7XHJcblxyXG4gIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDcmVhdGUoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoIWUudGFyZ2V0WzFdLnZhbHVlKSB7XHJcbiAgICBhbGVydChcIlByb2plY3QgbmFtZSBjYW4ndCBiZSBlbXB0eVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoZS50YXJnZXRbMV0udmFsdWUpO1xyXG4gIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xyXG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gIGRpc3BsYXlOYXYocHJvamVjdHMpO1xyXG4gIGRpc3BsYXlUb2RvcyhuZXdQcm9qZWN0Lmxpc3RUb2RvcygpLCBuZXdQcm9qZWN0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi9jcmVhdGVUb2RvJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IGRpc3BsYXlUb2RvcyBmcm9tICcuL2Rpc3BsYXlUb2Rvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvRm9ybShwcm9qZWN0KSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgYWRkQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1wbHVzXCI+PC9pPic7XHJcbiAgYWRkSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIG5ldyB0YXNrJztcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZFRvZG9Gb3JtJyk7XHJcbiAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLXBsdXMnKTtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYWRkSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBoYW5kbGVDcmVhdGUoZSwgcHJvamVjdCkpO1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG5cclxuICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKGUsIHByb2plY3QpIHtcclxuICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0WzFdLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBlLnRhcmdldFsyXS52YWx1ZTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCF0aXRsZSkge1xyXG4gICAgYWxlcnQoXCJUb2RvIHRpdGxlIGNhbid0IGJlIGVtcHR5XCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgJ3Rlc3QgZGVzY3JpcHRpb24nLCBkdWVEYXRlLCAndXJnZW50JywgZmFsc2UsIHByb2plY3QpO1xyXG4gIHByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcclxuXHJcbiAgZGlzcGxheVRvZG9zKHByb2plY3QubGlzdFRvZG9zKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
export default function displayNav(projects) {
  const content = document.querySelector('#content');
  const sideBar = document.createElement('nav');
  const projectList = document.createElement('ul');

  projects.forEach((project) => {
    const listElement = document.createElement('li');
    const buttonElement = document.createElement('button');
    buttonElement.textContent = project.title;
    listElement.appendChild(buttonElement);
    projectList.appendChild(listElement);
  });
  sideBar.appendChild(projectList);
  sideBar.classList.add('side-bar');
  content.prepend(sideBar);
}

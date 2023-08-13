import { profile, projects } from "../../data/data.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";
import { renderToDom } from "../../utility/renderToDom.js";

export const projectsOnDom = (array) => {
  let domString = `
    <div class="proj-search">
      <input type="search" id="form1" class="form-control" placeholder="Search all projects..." aria-label="Search" />
    </div>
  `;
  for (const proj of array) {
    domString += `
    <div class="proj-card w-150 h-25">
      <div class="proj-card-body grid-item-1">
        <h5 class="form-card-title">
          <a style="color: #57A6FF">${proj.name}</a>
        </h5>
        <p class="card-text">${proj.description}</p>
      </div>
      <div class="grid-item-3">
        <p class="updatedLast">Updated Last: ${proj.updatedLast}</p>
      </div>
    </div>
    `;
  }
  renderToDom("#proj-container", domString);
};

export const projFormOnDom = () => {
  const domString = `
    <form id="projectForm">
      <h4 class="create">Create New Project</h4>
      <p class="blurb">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.

      <div class="newProject">
        <h5 class="proj-name">Project
        <input type="text" id="proj-input" class="form-control project-form" />
      </div>

      <div class="description">
        <h5 class="proj-name">Description<span class="optional-txt">(optional)</span></h5>      
        <input type="text" id="proj-description" class="form-control description-form" />
      </div>

        <div class="btn-create-flex">
          <button type="submit" class="btn btn-success btn-create">Create Project</button>
        </div>
      </div>
    </form>
  `;
  renderToDom("#projects-form-container", domString);
};

const projForm = document.querySelector("#projects-form-container");

projForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProject = {
    id: projects.length + 1,
    name: document.querySelector("#proj-input").value,
    description: document.querySelector("#proj-description").value,
    updatedLast: "seconds ago",
  };

  projects.push(newProject);
  projectsOnDom(projects);
  projectForm.reset();
});

navbarOnDom();
profileOnDom(profile);
projectsOnDom(projects);
projFormOnDom();
footerOnDom();

import { profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";
import { repos } from "../../data/data.js";

// *********  OVERVIEW - Pinned Header HTML ********** //
const overviewHeader = () => {
  const headerHTML = `<h5 style="color:white; ">Pinned</h5>`;
  renderToDom("#pinned-repos-header", headerHTML);
};

// *********  OVERVIEW - Constructing Modal and Pinned Repo Form ********** //
const modalFormCreator = (array) => {
  let domString = ``;
  array.forEach((repo) => {
  domString += `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${repo.id}" id="flexCheckChecked" ${repo.fave ? 'checked': ''}>
    <label class="form-check-label" for="flexCheckChecked"><span class="material-symbols-outlined">book</span> 
      ${repo.name} 
    </label>
  </div>`
  })
  return domString; 
} 

const pinnedRepoModal = () => {
  const domString = `<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Customize Your Pins
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color:#0D1117;">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Pinned Repositories</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="background-color:#0D1117;">
          <form id="modalForm">
          ${modalFormCreator(repos)}
          <div class="modal-footer" style="background-color:#0D1117;">
          <button type="submit" class="btn btn-success" style="background-color:#198754;color:#C9D1D9">Save Pins</button>
          </form> 
        </div>
        </div>
      </div>
    </div>
  </div>`
renderToDom("#pinned-repos-header", domString); 
}
pinnedRepoModal(); 


// *********  OVERVIEW - Cards ********** //
const alreadyFaveArr = repos.filter((repo) => repo.fave); 

const renderPinnedCards = (array) => {
  let domString = ``;
 array.forEach((repo) => {
      domString += `<div class="card" id="pinned-card" style="width: 18rem; border-color:grey; margin:0.5em">
  <div class="card-body">
    <h5 class="card-title"><span class="material-symbols-outlined">book</span><a style="color: #57A6FF">${repo.name}</a></h5>
    <p class="card-text">${repo.description}</p>
  <div class="grid-item-4">  
    <p class="codebase">
    <svg height="15" width="15">
      <circle cx="6" cy="6" r="6" fill=${repo.codebaseColor}></circle>
    </svg>
    ${repo.codebase}
  </p>
  </div>
  </div>
</div>`;
    });
  renderToDom("#pinned-repos", domString);
};

// *********  OVERVIEW - FORM ********** //
const pinnedRepoFormHTML = () => {
  const domString = `<form id="overview-form"><div class="mb-3">
  <h2 style="color:white;">Pin a Repository</h2>
  <p>Create a Pinned Repository</p>
  <hr>
  <label for="exampleFormControlInput1" class="form-label" style="color:white;">Repository Name</label>
  <input type="text" class="form-control" id="pinnedRepo" style="background-color:black;border-color:#6c6e72">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style="color:white;">Description</label>
  <textarea class="form-control" id="pinnedRepoDesc" rows="4" style="background-color:black;border-color:#6c6e72"></textarea>
  <hr>
  <button type="submit" class="btn btn-success">Pin It!</button>
  </div></form>`;
  renderToDom("#pinned-repos-form-container", domString);
};

// *********  OVERVIEW - Event Listeners ********** //
const eventListeners = () => {
  //Form Submission Event Listener
  document.querySelector("#overview-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newFave = {
      id: repos.length + 1,
      name: document.querySelector("#pinnedRepo").value,
      description: document.querySelector("#pinnedRepoDesc").value,
      fave: true,
      codebase: `JavaScript`,
      codebaseColor: "#F0E059",
    };
    repos.push(newFave);
    renderPinnedCards();
    document.querySelector("#overview-form").reset();
  });

  document.querySelector("#modalForm").addEventListener("submit", (e) => {
    e.preventDefault();
  const getCheckedBoxes = document.querySelectorAll('input[type="checkbox"]');
  const checkedRepos = [];
  const indexes = []; 
  let reposToRender = []; 
  getCheckedBoxes.forEach((node) => {
   if (node.checked) {
     checkedRepos.push(node.value); 
   }
  })
  for (let i = 0; i < checkedRepos.length; i++) {
   indexes.push(repos.findIndex((repo) => checkedRepos[i] == repo.id));
 }
  indexes.forEach((index) => reposToRender.push(repos[index])); 
 renderPinnedCards(reposToRender);
});
}

// ********* OVERVIEW - START ********** //
const startOverview = () => {
  profileOnDom(profile);
  renderPinnedCards(alreadyFaveArr);
  pinnedRepoFormHTML();
  eventListeners();
  navbarOnDom();
  // overviewHeader();
  profileOnDom(profile);
  footerOnDom();
};
startOverview();

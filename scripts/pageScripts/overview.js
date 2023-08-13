import { profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";
import { repos } from "../../data/data.js";

// *********  OVERVIEW - Constructing Header, Modal, and Pinned Repo Form ********** //
const modalFormCreator = (array = repos) => {
  let domString = ``;
  array.forEach((repo) => {
    domString += `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${
      repo.id
    }" id="flexCheckChecked" ${repo.fave ? "checked" : ""}>
    <label class="form-check-label" for="flexCheckChecked" style="display:grid;grid-template-columns:6% 80% 14%"><span class="material-symbols-outlined">book</span> 
      ${repo.name} <div> ${repo.favIcon} ${repo.faveNum} </div>
    </label>
  </div>`;
  });
  return domString;
};

const pinnedRepoModal = () => {
  const domString = `<div style="display:flex;align-items:flex-end;"><h5 style="color:white;">Pinned</h5></div>
  <!-- Button trigger modal -->
  <div style="display:flex;justify-content:end;"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="align-text:right;margin-bottom:.5rem">
    Customize Your Pins
  </button></div>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color:#0D1117;">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Pinned Repositories</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"stlye="--bs-btn-close-color:white;"></button>
        </div>
        <div class="modal-body" style="background-color:#0D1117;">
        <div id="pinnedRepoSearch" style="display:flex;justify-content:center">
        <div class="search">
        <input type="search" id="form1" class="form-control" placeholder="Filter Repositories..." aria-label="Search" />
      </div>
      </div>
          <form id="modalForm">
          <div style="padding:1em 0 1em 0;" id="pinned-repo-search">
          ${modalFormCreator()}
          </div>
          <div class="modal-footer" style="background-color:#0D1117;">
          <button type="submit" class="btn btn-success" data-bs-dismiss="modal" style="background-color:#198754;color:#C9D1D9">Save Pins</button>
          </form> 
        </div>
        </div>
      </div>
    </div>
  </div>`;
  renderToDom("#pinned-repos-header", domString);
};
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

// *********  OVERVIEW - Event Listeners ********** //
const eventListeners = () => {
  //Search function within the modal. Filters out repos. 
  document.querySelector("#pinnedRepoSearch").addEventListener("keyup", (e) => {
    const userInput = e.target.value.toLowerCase();
    const filteredModal = modalFormCreator(
      repos.filter((repo) => repo.name.toLowerCase().includes(userInput))
    );
    document.querySelector("#pinned-repo-search").innerHTML = filteredModal;
  });

  document.querySelector("#modalForm").addEventListener("submit", (e) => {
    e.preventDefault();
    //finds all elements that take a checkbox input and puts them into a node
    const getCheckedBoxes = document.querySelectorAll('input[type="checkbox"]');
    //creating empty arrays to organize the node 
    const checkedRepos = []; //the value, which is the name of a checked repo, goes here 
    const indexes = []; //indexes on the repo array of the checked repos go here 
    let reposToRender = []; //final array that contains the repos to be rendered
    //checkes for the value of the checkboxes that ARE checked 
    getCheckedBoxes.forEach((node) => {
      if (node.checked) {
        checkedRepos.push(node.value);
      }
    });
    //finds the indexes of those values in respect to the repos array
    for (let i = 0; i < checkedRepos.length; i++) {
      indexes.push(repos.findIndex((repo) => checkedRepos[i] == repo.id));
    }
    //renders the repos within the array to the dom
    indexes.forEach((index) => reposToRender.push(repos[index]));
    renderPinnedCards(reposToRender);
  });
};

// ********* OVERVIEW - START ********** //
const startOverview = () => {
  navbarOnDom();                  //profileOnDom was being rendered two times and moved eventListeners to the bottom of startOverview()
  overviewHeader();               // I was getting render errors when trying to run the site. 
  profileOnDom(profile);
  renderPinnedCards(alreadyFaveArr);
  eventListeners();
  navbarOnDom();
  profileOnDom(profile);
  footerOnDom();
  eventListeners();
};
startOverview();

import { profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";
import { repos } from "../../data/data.js";

// *********  OVERVIEW - Constructing Header, Modal, and Pinned Repo Form ********** //

const aboutMe = () => {
const domString = `<div style="font-family:'Courier New'; margin: 0.7rem 0 0 0.5rem;"><h6>gregGroks13/greg.md</h6>
<h1>👋 Hi, I'm Greg...</h1>
<hr>
</div>
<div class="aboutme-header-img">
<img class="aboutme-header-img" style="margin: 1rem;" src="assets/images/github-header-image.png">
</div>
<div style="font-family:'Courier New';overflow-y:scroll;padding:0.5rem;"><p>
As a software engineer, I bring a unique blend of capabilities to the digital realm. Here's what I'm all about:
Problem-Solving Wizardry 🧙‍♂️<br><br>

Got a complex challenge? I thrive on breaking down problems into bite-sized pieces and crafting elegant solutions. My algorithmic prowess helps me navigate through the maze of logic to find the optimal path.
Multilingual Maestro 💬<br><br>

Whether it's Python, JavaScript, Java, or even the nuances of SQL, I'm fluent in a multitude of programming languages. I love conversing with code and turning abstract ideas into functional systems.
End-to-End Enlightenment 🌐<br><br>

From the front-end dazzle to the back-end stability, I've got your software's entire journey covered. Crafting user-friendly interfaces is my jam, and optimizing databases is my delight.
Learning at Lightspeed 🌟<br><br>

The tech world evolves faster than lightspeed travel, but that's where I thrive. I adapt to new technologies, frameworks, and tools like a digital chameleon, ensuring that your software stays at the cutting edge.
Collaborative Cohort 🤝<br><br>

Teamwork makes the code work! I seamlessly integrate into development teams, communicating ideas, sharing insights, and contributing effectively to ensure the collective success of projects.
Let's Code the Future! ⏩<br><br>

Whether you need a quick bug fix or a comprehensive software solution, I'm here to assist. Let's collaborate and create digital marvels that redefine the boundaries of possibility!</p></div>`
renderToDom(".aboutMe", domString); 
}
aboutMe();

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
    document.querySelector("#pinned-repo-search").reset(); 
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
  profileOnDom(profile);
  renderPinnedCards(alreadyFaveArr);
  eventListeners();
  navbarOnDom();
  profileOnDom(profile);
  footerOnDom();
};
startOverview();

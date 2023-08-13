import { profile, repos } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";

export const reposOnDom = (array) => {
  let domString = `
    <div class="search">
      <input type="search" id="form1" class="form-control" placeholder="Find a repository..." aria-label="Search" />
    </div>
  `;
  for (const repo of array) {
    domString += `
    <div class="repo-card w-100 h-25">
      <div class="repo-card-body grid-item-1">
        <h5 class="card-title">
          <a style="color: #57A6FF">${repo.name}</a>
        </h5>
        <p class="card-text">${repo.description}</p>
      </div>
      <div class="btn-group grid-item-2">
        <button type="button" id="star-btn" class="btn btn-secondary btn-sm h-50 w-50">${repo.favIcon}Star</button>
        <button type="button" id="star-btn" class="btn btn-secondary btn-sm grid-item-2 h-50 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-repo">
          <li><a class="dropdown-item" href="#">Future ideas</a></li>
          <li><a class="dropdown-item" href="#">Personal Projects</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">&#43; Create list</a></li>
        </ul>
      </div>
      <div class="grid-item-4">
        <p class="codebase">
          <svg height="15" width="15">
            <circle cx="6" cy="6" r="6" fill=${repo.codebaseColor}></circle>
          </svg>
          ${repo.codebase}
        </p>
        <p class="favorite">${repo.favIcon}${repo.faveNum}</p>
        <p class="branch">${repo.branchIcon}${repo.branchNum}</p>
        <p class="updated">${repo.updatedLast}</p>
      </div>
      <div class="grid-item-3">
        <img src=${repo.activity} alt="Activity monitor" class="activity h-75">
      </div>
    </div>
    `
  }
  renderToDom("#repo-container", domString)
}

export const repoFormOnDom = () => {
  const domString = `
    <form id="repositoryForm">
      <h4 class="create">Create a new repository</h4>
      <p class="blurb">A repository contains all project files, including the revision history. Already have a project repository elsewhere? <a href="#">Import a repository.</a></p>
      <p class="required-txt">Required fields are marked with an asterisk (*).</p>

      <div class="template-dropdown">
        <h5>Repository Template</h5>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="templateBtn" data-bs-toggle="dropdown" aria-expanded="false">
          No Template
        </button>
        <ul class="dropdown-owner dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
          <li><span class="dropdown-item">Basic Template</span></li>
          <li><span class="dropdown-item">Advanced Template</span></li>
        </ul>
        </div>
        <br>
        <span class="span-1">Start your repository with a template repository's contents.</span>
      </div>

      <div class="owner-dropdown">
        <div class="dropdown">
          <h5 class="owner">Owner*</h5>
          <button class="btn btn-secondary dropdown-toggle" type="button" id="ownerBtn" data-bs-toggle="dropdown" aria-expanded="false">
            Choose an owner
          </button>
          <ul class="dropdown-owner dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
            <input type="text" class="owner-input form-control">
            <li><span class="dropdown-item">gregGroks13</span></li>
            <li><a class="dropdown-item" href="#">nss-evening-cohort-24</a></li>
          </ul>
        </div>
        <span class="backslash">/</span>
        <div class="form-outline">
          <h5 class="repo-name">Repository name*</h5>
          <input type="text" id="repo-input" class="form-control w-100"/>
        </div>
      </div>

      <p class="suggestion">Great repository names are short and memorable. Need inspiration? How about
      <a href="#" class="suggest-link">laughing-spork</a>?</p>

      <div class="description">
        <h5 class="repo-name">Description <span class="optional-txt">(optional)</span></h5>      
        <input type="text" id="repo-description" class="form-control description-form" />
      </div>

      <div class="visibility">
        <div class="form-check">
          <div class="radial">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" checked/>
          </div>
          <div class="icon">  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z"></path><path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z"></path></svg>
          </div>
          <div class="visible-txt">
            <label class="form-check-label" for="flexRadioDefault1"> Public </label>
            <p>Anyone on the internet can see this repository. You choose who can commit.</p>
          </div>
        </div>
        <div class="form-check">
          <div class="radial">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
          </div>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path></svg>
          </div>
          <div class="visible-txt">
            <label class="form-check-label" for="flexRadioDefault2"> Private </label>
            <p>You choose who can see and commit to this repository.</p>
          </div>
        </div>
      </div>

      <div class="initialization">
        <h5 style="font-weight: 600">Initialize this repository with:</h5>
        <div class="initialization-container">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          </div>
          <div class="initial-settings">
            <label class="form-check-label" for="flexCheckDefault" style="font-size: 0.875rem">Add a README file</label>
            <p>This is where you can write a long description for your project. <a href="#">Learn more about READMEs.</a></p>
          </div>
        </div>
        
        <h5 style="font-weight: 600">Add .gitignore</h5>
        <div class="dropdown">
          <div class="ignore-dropdown">       
            <button class="btn btn-secondary dropdown-toggle" type="button" id="ignoreBtn" data-bs-toggle="dropdown" aria-expanded="false">
              .gitignore template:<span>None</span>
            </button>
            <ul class="dropdown-ignore dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">None</a></li>
              <li><a class="dropdown-item" href="#">AL</a></li>
              <li><a class="dropdown-item" href="#">Actionscript</a></li>
            </ul>
          </div>
        </div>
        <p class="ignore">Choose which files not to track from a list of templates. <a href="#" >Learn more about ignoring files.</a></p>

        <h5 style="font-weight: 600">Choose a license</h5>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle license" type="button" id="licenseBtn" data-bs-toggle="dropdown" aria-expanded="false">
            License:<span>None</span>
          </button>
          <ul class="dropdown-license dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
            <div class="license-input">
              <span>License</span>
              <input type="text" placeholder="Filter..." class="owner-input form-control">
            </div>
            <div class="dropdown-list">
              <li><span class="dropdown-item">Apache License 2.0</span></li>
              <li><span class="dropdown-item">GNU General Public License</span></li>
              <li><span class="dropdown-item">MIT License</span></li>
              <li><span class="dropdown-item">BSD 2-Clause "Simplified" License</span></li>
              <li><span class="dropdown-item">BSD 3-Clause "New" or "Revised" License</span></li>
              <li><span class="dropdown-item">Boost Software License 1.0</span></li>
              <li><span class="dropdown-item">Creative Commons Zero v1.0 Universal</span></li>
              <li><span class="dropdown-item">Eclipse Public License 2.0</span></li>
              <li><span class="dropdown-item">GNU Affero General Public License v3.0</span></li>
              <li><span class="dropdown-item">GNU General Public License v2.0</span></li>
              <li><span class="dropdown-item">GNU Lesser General Public License v2.1</span></li>
              <li><span class="dropdown-item">Mozilla Public License 2.0</span></li>
              <li><span class="dropdown-item">The Unlicense</span></li>
            </div>
          </ul>
        </div>
        <div class="bottom-border">
          <p class="ignore">A license tells others what they can and can't do with your code. <a href="#" >Learn more about licenses.</a></p>
        </div>
        <div class="btn-create-flex">
          <button type="submit" class="btn btn-success btn-create">Create repository</button>
        </div>
      </div>
    </form>
  `;
  renderToDom("#repo-form", domString)
}


const repoForm = document.getElementById("repo-form")

repoForm.addEventListener('submit',(e) => {
  e.preventDefault()  

    const newRepository = {
      id: repos.length +1,
      name: document.querySelector('#repo-input').value,
      description: document.querySelector('#repo-description').value,
      activity: "../../assets/images/githubActivity.png",
      faveNum: 0,
      branchNum: 0,
      updatedLast: "seconds ago",
      codebase: "Javascript",
      codebaseColor: "#F0E059",
      favIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="15" height="15" class="star"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>`,
      branchIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="15" height="15" class="branch-icon"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>`,
    };

    console.log(newRepository)

    repos.push(newRepository)
    reposOnDom(repos)
    repoForm.reset()
  })

const startRepoPage = ( () => {
  navbarOnDom();
  profileOnDom(profile);
  reposOnDom(repos);
  repoFormOnDom();
  footerOnDom();
});

startRepoPage();
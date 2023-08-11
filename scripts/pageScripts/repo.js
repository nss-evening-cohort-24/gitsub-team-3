import { profile, repos } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";

export const reposOnDom = (array) => {
  let domString = `
    <div class="form-outline">
      <input type="search" id="form1" class="form-control w-75" placeholder="Find a repository..." aria-label="Search" />
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
        <button id="star-btn" class="btn btn-secondary btn-sm h-50 w-50" type="button">
          ${repo.favIcon}Star
        </button>
        <button type="button" id="star-btn" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split grid-item-2 h-50" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="height: 30%"></button>
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
    // TODO: Create form for repository
  }
  renderToDom("#repo-container", domString)
}

navbarOnDom();
profileOnDom(profile);
reposOnDom(repos);
footerOnDom();

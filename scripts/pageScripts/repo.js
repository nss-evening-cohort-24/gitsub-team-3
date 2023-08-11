import { profile, repos } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";

export const reposOnDom = (array) => {
  let domString = `
    <div class="form-outline">
      <input type="search" id="form1" class="form-control w-75" placeholder="Type query" aria-label="Search" />
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
          Star
        </button>
        <button type="button" id="star-btn" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split grid-item-2 h-50" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
      </div>
      <div class="grid-item-3">
        <img src=${repo.activity} alt="Activity monitor" class="activity h-75">
      </div>
    </div>
    `
  }
  renderToDom("#repo-container", domString)
}

navbarOnDom();
profileOnDom(profile);
reposOnDom(repos);
footerOnDom();

import { renderToDom } from "./utility/utility.js";
import { renderProfile } from "./utility/utility.js";
// *********  OVERVIEW  ********** //
renderProfile(); 

const pinnedRepoFormHTML = () => {
  const domString = `<div class="mb-3">
  <h2 style="color:white;">Pin Repository</h2>
  <p>Create a Pinned Repository</p>
  <hr>
  <label for="exampleFormControlInput1" class="form-label" style="color:white;">Repository Name</label>
  <input type="text" class="form-control" id="pinnedRepo" placeholder="Repository">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style="color:white;">Description</label>
  <textarea class="form-control" id="pinnedRepoDesc" rows="4"></textarea>
  <hr>
  <button type="button" class="btn btn-success">Pin It!</button>
  </div>`
  renderToDom("#pinned-repo-form", domString);
}
pinnedRepoFormHTML(); 

import { renderToDom } from "./utility/utility.js";
import { packages, profile } from "./data.js";
const packageOnDom = (array) => {
  let domString = "";
  for (const pack of array) {
    domString += `
  <div class="card" style="width: 18rem;">
    <img src="${pack.icon}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pack.name}</h5>
      <p class="card-text">${pack.description}</p>
      <a href="#" class="btn btn-primary">Learn more...</a>
    </div>
  </div>
`;
  }
  renderToDom("#package-container", domString);
};
packageOnDom(packages)

const packageFormOnDom = () => {
  let domString = "";
  domString += `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Create new package</label>
  <input type="text" class="form-control" id="package-form-name" placeholder="name">
</div>
<div class="mb-3">
  <label for="package-form-description" class="form-label">Description</label>
  <textarea class="form-control" id="package-form-description" rows="3"></textarea>
</div>
<input class="btn btn-primary" type="submit" value="Submit">
`;
renderToDom("#package-form",domString)
};
packageFormOnDom()

const profileOnDom = (array) => {
  let domString = "";
  for (const info of array) {
    domString += `
    <div class="card" style="width: 18.5em;">
      <div id="card-header" class="card-body">
        <img src="../images-g/profilePic.jpg" id="profile-pic" class="card-img-top" alt="User profile picture" width="260" height="260">
        <div class="card-title">
          <h1 id="full-name">Greg Markus</h1>
          <h1 id="username">gregGroks13</h1>
        </div>
      </div>
      <div id="main-body">
        <div id="btn-container">
          <button id="follow-btn">Follow</button>
          <button id="sponsor-btn">Sponsor</button>
          <button id="dots-btn">...</button>
        </div>
        <p class="card-text">I am new to tech and very willing to learn.</p>
        <div id="follow-count">
          <div class="follow-style">
            <a href="#" class="follow">127 followers</a>
            <a href="#" class="follow">30 following</a>
          </div>
        </div>
        <ul id="social-info">
          <li>Nashville, Tennessee</li>
          <li>gregGroks13@gmail.com</li>
          <li>https://gregGroks.com</li>
          <li>@gregGroks</li>
          <li>@gregGroks</li>
        </ul>
      </div>
      <div id="sponsor">
        <h1 class="h1-sm">Sponsors</h1>
        <div id="sponsor-profile-pic"></div>
      </div>
      <div id="organization">
        <h1 class="h1-sm">Organizations</h1>
        <div id="org-profile-pic"></div>
      </div>
    </div>
    `
  };

  renderToDom("#main-content", domString)
}

profileOnDom(profile);

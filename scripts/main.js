import { renderToDom } from "../utility/renderToDom.js";

export const profileOnDom = (array) => {
  let domString = "";
  for (const info of array) {
    domString += `
    <div class="card" style="width: 18.5em;">
      <div id="card-header" class="card-body">
        <img src=${info.profileImage} id="profile-pic" class="card-img-top" alt="User profile picture" width="260" height="260">
        <div class="card-title">
          <h1 id="full-name">${info.name}</h1>
          <h1 id="username">${info.username}</h1>
        </div>
      </div>
      <div id="main-body">
        <div id="btn-container">
          <button id="follow-btn">Follow</button>
          <button id="sponsor-btn">Sponsor</button>
        </div>
        <div class="card-text">${info.bio}</div>
        <div id="follow-count">
          <div class="follow-style">
            <a href="#" class="follow">${info.followerCount} followers</a>
            <a href="#" class="follow">${info.followedCount} following</a>
          </div>
        </div>
        <ul id="social-info">
          <li>${info.location}</li>
          <li>${info.email}</li>
          <li>${info.landingPage}</li>
          <li>${info.socials}</li>
          <li>${info.socials}</li>
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

import { renderToDom } from "../utility/renderToDom.js";

export const profileOnDom = (array) => {
  let domString = "";
  for (const info of array) {
    domString += `
    <div class="card" style="width: 18.625em;">
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
    `;
  }
  renderToDom("#main-content", domString);
};

export const footerOnDom = () => {
  let domString = `    
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-link px-2 text-body-secondary copyright">2023 GitHub, Inc.</li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary footer-item-text">Terms</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Privacy</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Security</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Status</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Help</a>
      </li>
      <li class="nav-link px-2 text-body-secondary"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#E6EDF3}</style><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Contact Github</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Pricing</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">API</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Training</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Blog</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">About</a>
      </li>
    </ul>    
  `;

  renderToDom("#footer", domString);
};

export const navbarOnDom = () => {
  const domString = `
    <nav class="navbar">
      <ul class="navbar_links">
        <li class="nav_item">
          <a href="../index.html" id="overview-btn"><span class="material-symbols-outlined">import_contacts</span>Overview</a>
        </li>
        <li class="nav_item"> 
          <a href="../pages/repo.html"> <span class="material-symbols-outlined">book</span>Repositories</a> 
        </li>
        <li class="nav_item"> 
          <a href="../pages/projects.html"><span class="material-symbols-outlined">library_books</span>Projects</a>
        </li>
        <li class="nav_item"> 
          <a href="../pages/packages.html"><span class="material-symbols-outlined">deployed_code</span>Packages</a>
        </li>
      </ul>
    </nav>
  `;
  renderToDom("#nav-load", domString);
};

import { packages, profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";

export const packageOnDom = (array) => {
  let domString = "";
  for (const pack of array) {
    domString += `
  <div id="package-card" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"><img src="${pack.icon}" class="card-img-top" alt="...">${pack.name}</h5>
      <p class="card-text">${pack.description}</p>
      <button type="button" class="btn btn-secondary btn-sm">Learn more...</button>
      <button type="button" class="btn btn-danger" id="delete-btn--${pack.id}">Delete</button>
    </div>
  </div>
`;
  }
  renderToDom("#package-container", domString);
};

export const packageFormOnDom = () => {
  let domString = "";
  domString += `
  <form id="package-form">
    <h1>Create new package</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Package name</label>
      <input type="text" class="form-control" id="package-name-input" placeholder="Enter name here" required>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
      <textarea class="form-control" id="package-description-input" placeholder="Write a short description here" rows="3" required></textarea>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Icon</label>
      <input type="url" class="form-control" id="package-icon-input" placeholder="Image url" required>
    </div>

    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>

  </form>
`;
  renderToDom("#package-form-container", domString);
};

const eventListeners = () => {
    const packageForm = document.getElementById("package-form");

    packageForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newPackage = {
        id: packages.length + 1,
        icon: document.getElementById("package-icon-input").value,
        name: document.getElementById("package-name-input").value,
        description: document.getElementById("package-description-input").value,
      };

      packages.push(newPackage);
      packageOnDom(packages);
      packageForm.reset();
    });

    document
      .querySelector("#package-container")
      .addEventListener("click", (event) => {
        if (event.target.id.includes("delete")) {
          const [, int] = event.target.id.split("--");

          const index = packages.findIndex((pack) => pack.id === Number(int));

          packages.splice(index, 1);

          packageOnDom(packages);
        }
      });
  };

const startPackages = () => {
  packageOnDom(packages)
  packageFormOnDom()
  navbarOnDom()
  profileOnDom(profile)
  footerOnDom()
  eventListeners()
}

startPackages()

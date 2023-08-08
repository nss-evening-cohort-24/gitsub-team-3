import { renderToDom } from "./utility/utility.js";
import { packages } from "./data.js";
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

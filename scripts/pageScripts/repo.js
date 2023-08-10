import { profile, repos } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { profileOnDom } from "../main.js";

export const reposOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString += `
    <p>I'm working boii</p>
    `
  }
  renderToDom("#repositories", domString)
}

profileOnDom(profile)
reposOnDom(repos);

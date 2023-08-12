import { profile, projects } from "../../data/data.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";
import { renderToDom } from "../../utility/renderToDom.js";





navbarOnDom()
profileOnDom(profile)
footerOnDom()

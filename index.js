import Navigo from "navigo";
import { camelCase } from "lodash";

import { header, main, footer, nav } from "./components";
import * as store from "./store/index.js";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
    document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${main(state)}
    ${nav(store.nav)}
    ${footer()}
    `;
    router.updatePageLinks();

    afterRender();
}
function afterRender() {
    // add menu toggle to bars icon in nav bar
    document.querySelector(".nav-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
router.on({
    "/": () => render(store.home),
    ":view": ({data, params}) => {
        //change the :view data element to camel case and remove any dashes(support for multi-woord views)
        const view = data?.view ? camelCase(data.view) : "home"; //help me better understand this line
        if(view in store) {
            render(store[view]);
        }else {
            render(store.viewNotFound);
            console.log(`View ${view} not defined`);
        }
    },
})
.resolve();






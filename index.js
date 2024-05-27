import Navigo from "navigo";
import { camelCase } from "lodash";

import { header, main, footer } from "./components";
import * as store from "./store";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
    document.querySelector("#root").innerHTML = `
    ${header(state)}
    
    ${main(state)}
    ${footer()}
    `;
    router.updatePageLinks();

    afterRender();
}

router.on({
    "/": () => render(store.home),
    ":iew": ({data, params}) => {
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

function afterRender() {
    //add menu toggle to bars icon in nav bar

    //want to understand the after render because I will need to make changes to it.
}




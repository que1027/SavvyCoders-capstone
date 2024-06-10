import html from "html-literal";
import comingSoon from "./assets/img/cs.jpg";
import HTML from "./assets/img/HTMLCert.jpg";
import js from "./assets/img/JSCert.jpg";

export default () => html`
   
      <img src=${HTML} alt="HTML">
      <div class="caption">HTML</div>
    </div>
    <div class="certificate">
      <img src=${js} alt="Javascript">
      <div class="caption">Javascript</div>
    </div>
    <div class="certificate">
        <img src=${comingSoon} alt="AZ-900">
        <div class="caption">AZ-900</div>
      </div>
      <div class="certificate">
            <img src=${comingSoon} alt="Agile">
            <div class="caption">Agile</div>
          </div>
  
          
  `;
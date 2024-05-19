import html from "html-literal";

export default () => html`
<div id="certificates-container">
    <div class="certificate">
      <img src="HTMLCert.jpg" alt="HTML">
      <div class="caption">HTML</div>
    </div>
    <div class="certificate">
      <img src="JSCert.jpg" alt="Javascript">
      <div class="caption">Javascript</div>
    </div>
    <div class="certificate">
        <img src="cs.jpg" alt="AZ-900">
        <div class="caption">AZ-900</div>
      </div>
      <div class="certificate">
            <img src="cs.jpg" alt="Agile">
            <div class="caption">Agile</div>
          </div>
    <!-- Add more certificate divs as needed -->
  </div>
  `;
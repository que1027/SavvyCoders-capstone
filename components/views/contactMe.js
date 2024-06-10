import html from "html-literal";

export default () => html`
            <form
      method="POST"
    >
      <label>
        Your email:
      </label>
        <input  id="ESubject" type="email" name="email">
     
      <label>
        Your message:
      </label>
        <textarea id="EBody" name="message"></textarea>
        <label>
     &nbsp;
        </label>
      <!-- your other form fields go here -->
      <button id="ESubmit"  type="submit">Send</button>
    </form>
       
       
        `;
        //debugger;
import { LitElement, html, css } from 'lit-element';
import "./hmr";
import "./components/hello-comp/hello-comp-component";
import "./components/react-comp/react-comp";

class App extends LitElement {

  static get properties() {
    return {};
  }
  render() {
    return html`
      <div class="helloo">hello</div>
      <hello-comp></hello-comp>
      <react-comp></react-comp>
    `;
  }
  createRenderRoot(){
      return this;
  }
}

customElements.define('app-root', App);

console.log("yay")


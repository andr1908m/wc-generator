import { LitElement, html, css } from 'lit-element';
import styles from "./hello.litscss";
import { applyPolyfill,ReflowStrategy } from 'custom-elements-hmr-polyfill';
import "./components/hello-comp.component";

// no auto-reflow (web components won't update)
applyPolyfill(ReflowStrategy.RERENDER_INNER_HTML,500, (elementName: string) => {
    console.log('[Web Component code change] ', elementName);
});

// console.log(styles)

// class App extends LitElement {

//   static get styles() {
//     return styles;
//   }

//   static get properties() {
//     return {};
//   }
//   render() {
//     return html`
//       <div class="helloo">hello</div>
//       <hello-comp></hello-comp>
//     `;
//   }
// }

// customElements.define('app-root', App);

console.log("yay")


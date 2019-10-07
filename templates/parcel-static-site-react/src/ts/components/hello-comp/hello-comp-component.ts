import { LitElement, html, css, customElement } from 'lit-element';
import styles from "./hello.litscss";

@customElement('hello-comp')
class HelloCompComponent  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      From LitElement: Works!
    `;
  }
}
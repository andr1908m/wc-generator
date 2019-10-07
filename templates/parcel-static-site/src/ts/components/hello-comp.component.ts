export class ElementOne extends HTMLElement {
    private name = "I am ElementOne";
    connectedCallback() {
      this.innerHTML = `
      h
        <div style="background-color:green">${this.name}</div>
        <hr>
          <element-two style="background-color:orange;display:block"></element-two>
      `;
    }
  }
  customElements.define("hello-comp", ElementOne);
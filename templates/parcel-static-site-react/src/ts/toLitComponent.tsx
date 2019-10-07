import { customElement, LitElement,html } from 'lit-element';
import ReactDOM from 'react-dom';

export default function toLitComponent(Comp:JSX.Element,name:string){
    @customElement(name)
    class Compon extends LitElement {
      render(){
        const div = document.createElement("div")
        ReactDOM.render(Comp,div)
        return html`<p>${div}</p>`;
      }
      createRenderRoot(){
          return this
      }
    }
}

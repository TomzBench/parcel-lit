import { LitElement, html, property } from "lit-element";

export class Demo extends LitElement {
  @property({ type: Number }) n = 0;
  handleClick() {
    this.n++;
  }
  render() {
    return html`
      <div>${this.n}</div>
      <button @click="${this.handleClick}">+1</button>
    `;
  }
}
customElements.define("app-demo", Demo);

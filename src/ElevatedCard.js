import { html, css, LitElement } from "lit-element";

export class ElevatedCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #fff;
        width: 312px;
        border-radius: 4px;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2)
                  , 0 1px 1px 0 rgba(0, 0, 0, 0.14)
                  , 0 1px 3px 0 rgba(0, 0, 0, 0.12)
                  ;
        transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1);
        overflow: hidden;
      }
      :host(:hover) {
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2)
                  , 0 4px 5px 0 rgba(0,0,0,.14)
                  , 0 1px 10px 0 rgba(0,0,0,.12)
                  ;
      }
      .media {
        width: 312px;
        margin: 0;
        object-fit: contain;
      }
      .title {
        font-size: 16px;
        font-weight: 600;
        padding: 16px 16px 8px 16px;
        margin: 0;
      }
      .support-text {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: 500;
        padding: 0 16px 16px 16px;
        margin: 0;
      }
      .support-text:empty {
        padding: 0;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      img: {
        converter: {
          fromAttribute: (value) => {
            if (value === '') {
              return null;
            }
            return value;
          },
          toAttribute: (value) => value,
        }
      }
    };
  }

  constructor() {
    super();
    this.title = "No Title";
    this.img = null;
  }

  render() {
    return html`
      ${this.img !== null
        ? html`<img class="media" src=${this.img}>`
        : html``
      }
      <h2 class="title">${this.title}</h2>
      <p class="support-text">
        <slot></slot>
      </p>
    `;
  }
}

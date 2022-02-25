export class WeatherCardComponent extends HTMLElement {
  constructor() {
    var that = super();
    const shadowRoot = that.attachShadow({mode: 'open'});

    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'weather-card pink');
    divElement.innerHTML = that.getInnerHTML();
    shadowRoot.appendChild(divElement);

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    shadowRoot.appendChild(styleElement);
  }

  getInnerHTML() {
    return `
<h3>In Richmond, Virginia,<br/>it is currently 36&deg;F and clear.</h3>
<p>Last updated: 2022-01-31 20:30</p>
    `;
  }
}
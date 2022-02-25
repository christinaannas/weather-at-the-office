export class WeatherCardComponent extends HTMLElement {
  constructor() {
    var that = super();
    const shadowRoot = that.attachShadow({mode: 'open'});

    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'weather-card-in-component pink');
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

const style = `
.weather-card-in-component {
  width: 75%;
  border: solid;
  border-color: black;
  border-radius: 10px;
  border-width: 2px;
  margin: 25px auto;
}
.weather-card-in-component h3 {
  text-align: center;
  margin-bottom: 0px;
}
.weather-card-in-component p {
  text-align: right;
  padding-right: 10px;
}
.pink {
  background-color: snow;
}
.purple {
  background-color: ghostwhite;
}
.blue {
  background-color: azure;
}
.green {
  background-color: honeydew;
}
`;
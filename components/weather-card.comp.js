export class WeatherCardComponent extends HTMLElement {
  constructor() {
    var that = super();
    that.model = {
      location: "Richmond, Virginia",
      tempFahrenheit: 36,
      weatherCondition: "clear",
      lastUpdated: "2022-01-31 20:30"
    };
    const shadowRoot = that.attachShadow({mode: 'open'});

    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'pink');
    divElement.innerHTML = that.getInnerHTML();
    shadowRoot.appendChild(divElement);

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    shadowRoot.appendChild(styleElement);
  }

  getInnerHTML() {
    return `
<h3>In ${this.model.location},<br/>it is currently ${this.model.tempFahrenheit}&deg;F and ${this.model.weatherCondition}.</h3>
<p>Last updated: ${this.model.lastUpdated}</p>
    `;
  }
}

const style = `
div {
  width: 75%;
  border: solid;
  border-color: black;
  border-radius: 10px;
  border-width: 2px;
  margin: 25px auto;
}
h3 {
  text-align: center;
  margin-bottom: 0px;
}
p {
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
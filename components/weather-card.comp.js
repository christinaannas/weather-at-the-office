export class WeatherCardComponent extends HTMLElement {
  constructor() {
    var that = super();
    that.model = {
      location: "Richmond, Virginia",
      tempFahrenheit: 36,
      weatherCondition: "clear",
      lastUpdated: "2022-01-31 20:30",
      colorClass: "pink"
    };
    const shadowRoot = that.attachShadow({mode: 'open'});

    that.divElement = document.createElement('div');
    that.updateInnerHTML();
    that.updateClass();
    shadowRoot.appendChild(that.divElement);

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    shadowRoot.appendChild(styleElement);
  }

  static get observedAttributes() {
    return ['location', 'temp', 'condition', 'updated', 'color_class'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    var that = this;
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case 'location' : {
        that.model.location = newValue;
        break;
      }
      case 'temp' : {
        that.model.tempFahrenheit = newValue;
        break;
      }
      case 'condition' : {
        that.model.weatherCondition = newValue;
        break;
      }
      case 'updated' : {
        that.model.lastUpdated = newValue;
        break;
      }
      case 'color_class' : {
        that.model.colorClass = newValue;
        that.updateClass();
        return;
      }
    }

    that.updateInnerHTML();
  }

  updateInnerHTML() {
    this.divElement.innerHTML = this.getInnerHTML();
  }

  updateClass() {
    this.divElement.setAttribute('class', this.model.colorClass);
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
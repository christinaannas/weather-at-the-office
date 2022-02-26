export class WeatherCardComponent extends HTMLElement {
  constructor() {
    var that = super();
    that.model = {
      location: "an unknown location",
      temp: null,
      condition: "unknown conditions",
      updated: "unknown",
      color_class: "transparent"
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

    that.model[name] = newValue;

    if (name === 'color_class') {
      that.updateClass();
    } else {
      that.updateInnerHTML();
    }
  }

  updateInnerHTML() {
    this.divElement.innerHTML = this.getInnerHTML();
  }

  updateClass() {
    this.divElement.setAttribute('class', this.model.color_class);
  }

  getInnerHTML() {
    return `
<h3>In ${this.model.location},<br/>it is currently ${this.model.temp ? this.model.temp + "&deg;F" : "an unknown temperature"} and ${this.model.condition}.</h3>
<p>Last updated: ${this.model.updated}</p>
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
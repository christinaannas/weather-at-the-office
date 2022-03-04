export class WeatherCardComponent extends HTMLElement {
  constructor() {
    var that = super();
    that.model = {
      location: null,
      temp: null,
      condition: null,
      updated: null,
      color_class: "transparent"
    };
    const shadowRoot = that.attachShadow({mode: 'open'});

    that.divElement = document.createElement('div');
    that.divElement.innerHTML = `
<h3 class="conditions">${that.getConditionsString()}</h3>
<p><span class="updatedText">${that.getUpdatedString()}</span> <button class="updateButton">Update now</button></p>
    `;
    const buttonElement = that.divElement.querySelector('.updateButton');
    buttonElement.innerHTML = "Update now";
    buttonElement.addEventListener('click', that.printButtonClick.bind(that));
    that.updateContents();
    that.updateClass();
    shadowRoot.appendChild(that.divElement);

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    shadowRoot.appendChild(styleElement);
  }

  printButtonClick() {
    console.log(`Button clicked for ${this.model.location ? this.model.location : "unknown location"}.`);
  }

  set props(props) {
    var that = this;

    var needToUpdateContents = false;
    var needToUpdateClass = false;

    for (const [propertyName, propertyValue] of Object.entries(props)) {
      if (!(that.model[propertyName] === propertyValue)) {
        that.model[propertyName] = propertyValue;
      }
      if (propertyName === 'color_class') {
        needToUpdateClass = true;
      } else {
        needToUpdateContents = true;
      }
    }

    if (needToUpdateContents) {
      that.updateContents();
    }
    if (needToUpdateClass) {
      that.updateClass();
    }
  }

  get props() {
    return this.model;
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
      that.updateContents();
    }
  }

  updateContents() {
    this.divElement.querySelector('.conditions').innerHTML = this.getConditionsString();
    this.divElement.querySelector('.updatedText').innerHTML = this.getUpdatedString();
  }

  updateClass() {
    this.divElement.setAttribute('class', `${this.model.color_class}`);
  }

  getConditionsString() {
    return `In ${this.model.location ? this.model.location : "an unknown location"},<br/>it is currently ${this.getTemperatureString(this.model.temp)} and ${this.model.condition ? this.model.condition : "unknown conditions"}.`;
  }
  
  getTemperatureString(temperatureValue) {
    // guard clause: catch valid 0 values explicitly
    if (temperatureValue === 0) {
      return "0&deg;F";
    }
    // if we haven't defined a temperature value, provide a decent string
    if (!temperatureValue) {
      return "an unknown temperature";
    }
    return `${temperatureValue}&deg;F`;
  }

  getUpdatedString() {
    return `Last updated: ${this.model.updated ? this.model.updated : "unknown"} `;
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
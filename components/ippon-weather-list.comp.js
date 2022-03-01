import { getWeatherData } from "../util/weather-info.service.mjs";

export class IpponWeatherListComponent extends HTMLElement {

  constructor() {
    var that = super();
    that.offices = [
      {
        location: "Richmond, Virginia",
        color_class: "pink"
      },
      {
        location: "Washington, District of Columbia",
        color_class: "purple"
      },
      {
        location: "New York, New York",
        color_class: "blue"
      },
      {
        location: "Atlanta, Georgia",
        color_class: "green"
      }
    ];

    const shadowRoot = that.attachShadow({mode: 'open'});
    const containerElement = document.createElement('div');
    const headerElement = document.createElement('h1');
    headerElement.innerHTML = "Weather Conditions at Ippon Offices";
    containerElement.appendChild(headerElement);

    for (const officeObject of that.offices) {
      const componentElement = document.createElement('weather-card-component');
      containerElement.appendChild(componentElement);
      componentElement.props = officeObject;
    }

    shadowRoot.appendChild(containerElement);
  }

  async connectedCallback() {
    for (const weatherCard of this.shadowRoot.querySelectorAll('weather-card-component')) {
      const weatherData = await getWeatherData(weatherCard.props.location)
      weatherCard.props = weatherData;
    }
  }
}

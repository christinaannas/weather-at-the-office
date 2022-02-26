export class IpponWeatherListComponent extends HTMLElement {

  constructor() {
    var that = super();
    that.offices = [
      {},
      {
        temp: 0
      },
      {
        location: "Richmond, Virginia",
        temp: 36,
        condition: "clear",
        updated: "2022-01-31 20:30",
        color_class: "pink"
      },
      {
        location: "Washington, District of Columbia",
        temp: 30,
        condition: "partly cloudy",
        updated: "2022-01-31 20:30",
        color_class: "purple"
      },
      {
        location: "New York, New York",
        temp: 28,
        condition: "partly cloudy",
        updated: "2022-01-31 20:15",
        color_class: "blue"
      },
      {
        location: "Atlanta, Georgia",
        temp: 43.7,
        condition: "clear",
        updated: "2022-01-31 20:15",
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
}

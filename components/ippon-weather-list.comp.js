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

    console.log("In the IpponWeatherListComponent constructor, before iterating over offices.");

    for (const officeObject of that.offices) {
      console.log("Processing an office object (create element; append child; set attributes).");
      const componentElement = document.createElement('weather-card-component');
      containerElement.appendChild(componentElement);
      for (const [attributeName, attributeValue] of Object.entries(officeObject)) {
        componentElement.setAttribute(attributeName, attributeValue);
      }
    }

    console.log("In the IpponWeatherListComponent constructor, after iterating over offices.");

    shadowRoot.appendChild(containerElement);
  }

  connectedCallback() {
    console.log("In the IpponWeatherListComponent connectedCallback.");
  }
}

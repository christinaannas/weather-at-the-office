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

    const divElement = document.createElement('div');
    divElement.innerHTML = that.getInnerHTML();

    shadowRoot.appendChild(divElement);
  }

  getInnerHTML() {
    var that = this;
    const header = "<h1>Weather Conditions at Ippon Offices</h1>";

    function customElementFromOfficeObject(officeObject) {
      const attributes = Object.entries(officeObject)
          .map(([attributeName, attributeValue]) => `${attributeName}="${attributeValue}"`);
          return `<weather-card-component ${attributes.join(" ")}></weather-card-component>`;
    }

    const officeCards = that.offices
        .map((officeObject) => customElementFromOfficeObject(officeObject));
    return header + officeCards.join(" ");
  }
}
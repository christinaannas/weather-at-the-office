export class IpponWeatherListComponent extends HTMLElement {

  constructor() {
    var that = super();
    const shadowRoot = that.attachShadow({mode: 'open'});

    const divElement = document.createElement('div');
    divElement.innerHTML = that.getInnerHTML();

    shadowRoot.appendChild(divElement);
  }

  getInnerHTML() {
    return `
<h1>Weather Conditions at Ippon Offices</h1>
<weather-card-component></weather-card-component>
<weather-card-component
  temp=0
></weather-card-component>
<weather-card-component
  location="Richmond, Virginia"
  temp="36"
  condition="clear"
  updated="2022-01-31 20:30"
  color_class="pink"
></weather-card-component>
<weather-card-component
  location="Washington, District of Columbia"
  temp="30"
  condition="partly cloudy"
  updated="2022-01-31 20:30"
  color_class="purple"
></weather-card-component>
<weather-card-component
  location="New York, New York"
  temp="28"
  condition="partly cloudy"
  updated="2022-01-31 20:15"
  color_class="blue"
></weather-card-component>
<weather-card-component
  location="Atlanta, Georgia"
  temp="43.7"
  condition="clear"
  updated="2022-01-31 20:15"
  color_class="green"
></weather-card-component>
    `;
  }
}
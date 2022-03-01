# Weather At The Office

## Setting the Stage
Examples of plain HTML and CSS styling. Open `index.html` using a browser to follow along.
## The Documents are _In_ The Computer & Hey, This Looks Familiar!
Enhancing our HTML and CSS with a custom element written in JS. To follow along, first:
-  [Install node.js](https://nodejs.org/en/download/).

Then, for hot reload magic, either:
-  Use npm to install `live-server` and run it in the same directory as the `index.html` file:
```
cd weather-at-the-office
npm install live-server
live-server
```
or:
- Use a live-server plugin for VSCode or your editor of choice. 

## Schrödinger's Pineapple Upside Down Cake
Enhancing our application with HTTP calls to get current weather data. 

Optionally, request a free API key at http://api.weatherapi.com. If you do, store the key in an environment variable called `WEATHER_API_KEY`. 

To use the HTTP server, install the required dependencies then run the server. 
```
npm install
node weather-server
```

Confirm the server is running using an API client like Postman or Insomnia, or the command line.
```
curl http://localhost:5000/weather-api?q=23230
```

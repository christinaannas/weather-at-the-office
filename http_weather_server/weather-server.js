const { default: axios } = require('axios');
const http = require('http');
const url = require('url');
const fs = require('fs')

const requestListener = async function(req, res) {
  const apiKey = process.env.WEATHER_API_KEY;
  const queryString = url.parse(req.url, true).query.q;
  var body;
  if (apiKey) {
    body = await useApi(queryString, apiKey);
  }
  if (!body) {
    body = useCache(queryString);
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (body) {
    res.writeHead(200);
    res.write(JSON.stringify(body));
  }
  else {
    res.writeHead(400);
    res.write(`Could not find data for the provided location '${queryString}'.`);
  }
  res.end();
}

async function useApi(queryString, apiKey) {
  const baseUrl = 'http://api.weatherapi.com/v1/';
  const endpoint = `${baseUrl}current.json?key=${apiKey}&q=${queryString}`;
  var weatherApiResponse;
  try {
    weatherApiResponse = await axios.get(endpoint);
  } catch (error) {
    console.log(`Error hitting ${endpoint} -- ${error}`);
    return;
  }
  const data = await weatherApiResponse.data;
  return data;
}

const mapLocationInputsToAbbreviations = {
  "Richmond, Virginia": "rva",
  "Richmond": "rva",
  "23230": "rva",

  "Washington, District of Columbia": "wdc",
  "DC": "wdc",
  "20005": "wdc",

  "New York, New York": "nyc",
  "New York City": "nyc",
  "10001": "nyc",

  "Atlanta, Georgia": "atl",
  "Atlanta": "atl",
  "30306": "atl"
};

function useCache(queryString) {
  if (queryString in mapLocationInputsToAbbreviations) {
    const filePath = `response_${mapLocationInputsToAbbreviations[queryString]}.json`;
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(err)
    }
  }
}

const server = http.createServer(requestListener);
server.listen(5000);
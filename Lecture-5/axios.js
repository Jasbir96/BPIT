// Commands
//1.npm init -y
//2. npm install axios
// axios=> promise based library(to make http request)
const axios = require("axios");

// http request

async function helper() {
  //makes a http get request to a server
  const response = await axios.get(
    "https://www.metaweather.com/api/location/search/?query=cityName"
  );
  // your requested information will be inside data key
  // woeid
  console.log(response.data);
  // woeid
  // const anotherResponse = await axios.get(
  //   "https://www.metaweather.com/api/location/" + woeid + "/"
  // );
  
}

helper();

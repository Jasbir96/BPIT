const axios = require("axios");
// // node weather.js today Mumbai
// input

module.exports = async function helper(location) {
  try {
    // get Woeid
    const response = await axios.get(
      "https://www.metaweather.com/api/location/search/?query=" + location
    );
    const woeid = response.data[0].woeid;
    // get raw weather using woeid
    // get Raw Weather
    const rawResponse = await axios.get(
      `https://www.metaweather.com/api/location/${woeid}/`
    );
    // Filter required Data=> 5days unfiltered
    return rawResponse.data["consolidated_weather"];
  } catch (err) {
    console.log("Some error occurred");
  }
  // woeid
  // const anotherResponse = await axios.get(
  //   "
  // );
};

//location=> woeid=> weather information

// "https://www.metaweather.com/api/location/search/?query=New Delhi"=>
// woeid

//https://www.metaweather.com/api/location/" + woeid + "/"=> weather information

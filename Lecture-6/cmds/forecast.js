const getRawWeather = require("../utilities/getRawWeather");
const getLocation = require("../utilities/getLocation");
const ora = require("ora");
module.exports = async function(location) {
  // 5days weather =>array
  const spinner = ora();
  spinner.start();
  if (location == undefined) {
    location = await getLocation();
  }

  const fullWeather = await getRawWeather(location);
  // console.log(fullWeather);
  spinner.stop();
  console.log("Forecast for " + location);

  for (let i = 0; i < fullWeather.length; i++) {
    const cDate = fullWeather[i]["applicable_date"];
    const minTemp = Math.floor(fullWeather[i]["min_temp"]);
    const maxTemp = Math.floor(fullWeather[i]["max_temp"]);
    const state = fullWeather[i]["weather_state_name"];
    console.log(
      `       ${cDate} - Low : ${minTemp}° |High : ${maxTemp}° | ${state}`
    );
  }
};

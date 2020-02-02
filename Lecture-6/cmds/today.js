const getRawWeather = require("../utilities/getRawWeather");
const getLocation = require("../utilities/getLocation");

const ora = require("ora");

module.exports = async function(location) {
  // 5days weather =>array
  const spinner = ora({
    interval: 80, // Optional
    frames: [":)", ":(", ":"]
  });
  spinner.start();
  if (location == undefined) {
    location = await getLocation();
  }

  const fullWeather = await getRawWeather(location);

  // current Date weather
  const TodaysWeather = fullWeather[0];
  // required fields
  const currentState = TodaysWeather["weather_state_name"];
  const temp = Math.ceil(TodaysWeather["the_temp"]);
  spinner.stop();
  // template String syntax=> you can also use normal strings
  console.log(`Current conditions in ${location}
                  ${temp} ${currentState}
                        `);
};

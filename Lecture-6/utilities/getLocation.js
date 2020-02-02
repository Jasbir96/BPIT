const axios = require("axios");
module.exports = async function() {
 const response= await axios.get("http://ip-api.com/json/");
 const location=response.data.city;

//  console.log(data);
  return location;
};

module.exports();
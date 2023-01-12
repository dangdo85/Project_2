const axios = require("axios");

let bearerToken = null;

const getNewToken = async () => {
  try {
    const data = await axios({
      url: "https://api.petfinder.com/v2/oauth2/token",
      method: "POST",
      data: `grant_type=client_credentials&client_id=${process.env.PETFINDER_API_KEY}&client_secret=${process.env.PETFINDER_SECRET}`,
    });
    bearerToken = data.data.access_token;
    // console.log("bearer token in config", bearerToken);
    return bearerToken;
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
    if (bearerToken === null) {
      await getNewToken();
    }
    return bearerToken;
  };

// get new bearer token every hour
setInterval(getNewToken, 3600000);

module.exports = { getNewToken, getToken };

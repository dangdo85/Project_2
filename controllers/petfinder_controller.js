const axios = require("axios");
const { getToken } = require("../models/petsAPI_config");

const getPet = async () => {
  const token = await getToken();
  try {
    const {data} = await axios({
      url: "https://api.petfinder.com/v2" + "/animals?type=dog",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.animals)
    return data.animals;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPet };

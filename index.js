const rs = require("readline-sync");
const axios = require("axios");

const countryCode = rs.question("Insert a country code");

const getCountryData = async (value) => {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${value}`);
    console.log(res.data);
  } catch {
    console.error("An error ocurred my boy :(");
  }
};

getCountryData(countryCode);
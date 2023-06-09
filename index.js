const rs = require("readline-sync");
const axios = require("axios");

const country = rs.question("Insert a country name");

const getCountryData = async (value) => {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${value}?fullText=true`);
    console.log(res.data);
  } catch {
    console.error("An error ocurred my boy :(");
  }
};

getCountryData(country);
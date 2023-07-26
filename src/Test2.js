import React, { useState } from "react";
import PropTypes from "prop-types";
const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai", "Kolkata"],
  },
  {
    name: "USA",
    value: "US",
    cities: ["New York", "Florida", "Wasington DC"],
  },
  {
    name: "United Kingdom",
    value: "UK",
    cities: ["London", "Manchester City", "Cambridge"],
  },
  {
    name: "US",
    value: "UK",
    cities: ["London", "Manchester City", "Cambridge"],
  },
];

const Test2 = (props) => {
  const [cities, setCities] = useState([]);
  const showCitesListHandler = (event) => {
    const responseData = countries.filter(
      (county) => county.name == event.target.value
    );
    console.log(
      "🚀 ~ file: Test2.js:27 ~ showCitesListHandler ~ responseData:",
      responseData
    );
    setCities([...responseData[0].cities, "Sourabh"]);
  };
  return (
    <div>
      <label for="countries">This is lable</label>
      <select name="" id="countries" onChange={showCitesListHandler}>
        {" "}
        {countries.map((country) => {
          return <option value={country.name}>{country.name}</option>;
        })}
      </select>
      <select name="" id="cities">
        {" "}
        {cities.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </select>
    </div>
  );
};

Test2.propTypes = {};

export default Test2;

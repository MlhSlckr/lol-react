import React, { Fragment, useEffect, useState } from "react";

function Api() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.Countries);
      });
  }, []);

  console.log(countries);

  countries.map((country) => {
    console.log(country.Country);
  });

  return (
    <div>
      {countries.map((country) => {
        <div className="">
          <h1>{country.Country}</h1>
        </div>;
      })}
    </div>
  );
}

export default Api;

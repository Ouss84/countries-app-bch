import React from "react";

import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  flag,
  region,
  population,
  languages,
  currencies,
  capital,
  alpha3Code,
}) => {
  return (
    <Link to={capital}>
      <div
        key={name}
        className="max-w-sm mx-auto bg-gray-600 bg-opacity-25 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 shadow-2xl flex-col  hover:bg-blue-100 z-10"
      >
        <div className="ml-2 text-xl grid gap-1 ">
          <span className="font-bold">{name}</span>
          <div className="flex-shrink-0">
            <img
              className="rounded-bl-lg rounded-tr-lg h-10 w-15 float-left "
              src={flag}
              alt="country-flag"
            />
          </div>
        </div>
        <div className="ml-2 h-full w-full">
          <p>
            <span className="font-semibold">Capital:</span> {capital}
          </p>

          <div>
            <p>
              <span className="font-semibold">Region: </span>
              {region}
            </p>

            <p>
              <span className="font-semibold">Country code: </span> {alpha3Code}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;

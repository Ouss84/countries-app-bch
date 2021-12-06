import React, { Component } from "react";
import axios from "axios";

import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import CountryCard from "./CountryCard";
class CountriesList extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flag,region,population,languages,alpha3Code"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        // console.log(this.state.data);
      });
  }
  searchHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    const countries = this.state.data.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    return (
      <div className="flex flex-col  items-center bg-map  bg-no-repeat bg-contain z-0">
        <input
          type="text"
          name="search"
          placeholder="Enter a country ..."
          className="focus:ring-2 focus:ring-gray-300 m-xl border-gray-400 text-5xl"
          onChange={this.searchHandler}
        ></input>

        <div className=" flex-1 grid grid-cols-3 gap-4 justify-self-auto self-auto ">
          {this.state.isLoading ? (
            <div className="loader">
              <div className="loading-gif">
                <SpinStretch />
              </div>
            </div>
          ) : (
            countries.map((item) => (
              <div key={item.name}>
                <CountryCard className="z-10" {...item} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default CountriesList;

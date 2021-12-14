import axios from "axios";
import React, { Component } from "react";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import number from "easy-number-formatter";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}
function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
  );
}

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
    isLoading: true,
  };
  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      console.log(this.state.country);
      console.log(this.state.weather);
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="loader">
          <div className="loading-gif">
            <SpinStretch />
          </div>
        </div>
      );
    }
    if (!this.state.isLoading)
      return (
        <div className="mt-20 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 shadow-lg">
          <div className="single-country">
            <img
              className="rounded-xl shadow-l mb-10"
              src={this.state.country.flags.svg}
              alt={this.state.country.name}
            ></img>
            <header className="ml-2 mb-3">
              Some information about{" "}
              <span className="font-bold italic">
                {this.state.country.name}
              </span>
            </header>
            <div className="ml-2">
              <p>
                Capital:{" "}
                <span className="font-semibold">
                  {this.state.country.capital}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className="font-semibold">
                  {number.formatNumber(this.state.country.population)}
                </span>
              </p>
              <p className="font-semibold">
                Official languages:{" "}
                {this.state.country.languages.map((l, i) => (
                  <span key={i}>{l.name}</span>
                ))}
              </p>
              <p>
                Currency:{" "}
                <span className="font-semibold">
                  {this.state.country.currencies[0].code}
                </span>
                <span>{this.state.country.currencies[0].symbol}</span>
              </p>
              <p>
                Time zone:{" "}
                <span className="font-semibold">
                  {this.state.country.timezones[0]}
                </span>
              </p>
              <div>
                <p className="mt-10">
                  Now the weather now in{" "}
                  <span className="font-semibold">
                    {this.state.country.capital}
                  </span>
                  :
                </p>
                <p>
                  Temperature:
                  <strong>{Math.floor(this.state.weather.main.temp)}</strong>
                </p>
                <div className="weather-description">
                  Weather description:
                  <span className="font-semibold">
                    {this.state.weather.weather[0].description}
                  </span>
                  <img
                    className="item-center"
                    src={`http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`}
                    alt="weather-icon"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default CountrySingle;

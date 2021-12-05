import "./App.css";
import CountriesList from "./components/CountriesList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import CountrySingle from "./components/CountrySingle";

const RouteWrapper = (props) => {
  const params = useParams();

  return <CountrySingle params={params} {...props} />;
};
const App = () => {
  return (
    <Router>
      <nav className="flex  m-10 justify-around text-lg text-bold font-sans font-bold ">
        <Link
          className=" bg-blue-100 pl-20 pr-20 rounded-lg ring-4 ring-gray-200 opacity-90 hover:opacity-100 hover:bg-red-300 "
          to="/"
        >
          Home
        </Link>

        <Link
          className="bg-blue-100 pl-20 pr-20 rounded-lg ring-4 ring-gray-200 opacity-90 hover:opacity-100 hover:bg-red-300"
          to="countries"
        >
          List of Countries
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/countries" element={<CountriesList />}></Route>
        <Route path="/countries/:name" element={<RouteWrapper />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

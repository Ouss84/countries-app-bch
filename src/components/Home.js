import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col  items-center text-center tracking-widest antialiased text-5xl mt-10">
      <h1>Welcome to our countries App</h1>
      <img
        className="bg-cover bg-center max-w-sm mt-xl"
        src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png"
        alt=""
      ></img>
      <footer className="text-3xl italic">
        Made by: <span>Oussama Bahri</span>
      </footer>
    </div>
  );
};

export default Home;

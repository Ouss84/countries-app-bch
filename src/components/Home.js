import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col  items-center text-center tracking-widest antialiased text-5xl mt-10">
      <h1>Welcome to our countries App</h1>
      <img
        className="bg-cover bg-center max-w-sm mt-xl"
        src="https://pixabay.com/get/geb2117b60e199b892395c4a3996eb08cea1293b68e13d111a25fb61c55272984ffcbbf0cfbcb1302f397a198955cbdb6cbdd4c93dc05e94719f48886b00da51c3074920f6117a539db93f8462c7e89b7_1920.png"
        alt=""
      ></img>
      <footer className="text-3xl italic">
        Made by: <span>Oussama Bahri</span>
      </footer>
    </div>
  );
};

export default Home;

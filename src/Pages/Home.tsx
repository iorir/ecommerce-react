import React from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
function Home() {
  //map
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7">
      <Categories />
      <Slider />
    </div>
  );
}

export default Home;

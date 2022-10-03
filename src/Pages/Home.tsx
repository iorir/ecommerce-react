import React from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import LastProducts from "../components/LastProducts";
function Home() {
  //map
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <Categories />
        <Slider />
      </div>
      <LastProducts />
    </div>
  );
}

export default Home;

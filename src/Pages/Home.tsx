import React from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import LastProducts from "../components/LastProducts";
import News from "../components/NewsComp";
function Home() {
  //map
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <Categories />
        <Slider />
      </div>
      <LastProducts />
      <News />
    </div>
  );
}

export default Home;

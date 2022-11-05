import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

const LastProducts = () => {
  const [lProducts, setLProducts] = useState<any[]>();
  const lastAdded = () => {
    axios
      .get(
        `https://www.jsonbulut.com/json/product.php?ref=${process.env.REACT_APP_API_KEY}&start=0&count=6&order=desc`
      )
      .then((res) => setLProducts(res.data.Products[0].bilgiler));
  };

  useEffect(() => {
    lastAdded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-14 content-center">
      <div className="">
        <h2 className="text-center text-2xl ">Last Added Products</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-12 justify-items-center gap-y-10 text-center">
        {lProducts?.map((item) => {
          return (
            <Card
              key={item.productId}
              title={item.productName}
              desc={item.description}
              img={item.images[0].normal}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LastProducts;

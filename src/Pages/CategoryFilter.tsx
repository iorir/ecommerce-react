import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

function CategoryFilter() {
  const location: any = useLocation();
  const [data, setData] = useState<any[]>();
  const getItems = () => {
    axios
      .get(
        `https://www.jsonbulut.com/json/product.php?ref=${process.env.REACT_APP_API_KEY}&start=1&count=2&categoryId=${location.state.itemId}`
      )
      .then((res) => setData(res.data.Products[0].bilgiler));
  };
  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      {!data && (
        <div className="text-center mt-32">THERE IS NO ITEM IN THIS CATEGORY</div>
      )}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-12 justify-items-center gap-y-10 text-center">
        {data?.map((item) => {
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
}

export default CategoryFilter;

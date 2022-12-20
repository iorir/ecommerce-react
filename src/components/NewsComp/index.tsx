import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
function NewsComp() {
  const [data, useData] = useState<any[]>();
  const getNews = () => {
    axios
      .get("https://www.jsonbulut.com/json/news.php", {
        params: {
          ref: process.env.REACT_APP_API_KEY_SEC,
          start: 0,
          count: 3,
          order: "desc",
        },
      })
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .then((res) => useData(res.data.News[0].Haber_Bilgileri));
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <div className="mt-8">
        <h2 className="text-center text-2xl ">News</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-12 justify-items-center gap-y-10 text-center">
        {data &&
          data.map((item) => {
            return (
              <Card
                key={item.id}
                desc={item.s_description}
                title={item.title}
                img={item.picture}
                ldesc={item.l_description}
              />
            );
          })}
      </div>
    </div>
  );
}

export default NewsComp;

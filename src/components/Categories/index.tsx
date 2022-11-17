import axios from "axios";
import { useEffect, useState } from "react";
import SubCategories from "../SubCategories";

function Categories(): JSX.Element {
  const [catItems, setCatItems] = useState<any>();
  const [topCategories, setTopCategories] = useState<any>();
  
  const categories = () => {
    axios
      .get(
        `https://www.jsonbulut.com/json/companyCategory.php?ref=${process.env.REACT_APP_API_KEY}`
      )
      .then((res: any) => {
        const top = res.data.Kategoriler[0].Categories.filter(
          (category: any) => category.TopCatogryId === "0"
        );
        setCatItems(res.data.Kategoriler[0].Categories);
        setTopCategories(top);
      });
  };
  const toggleCategories = (tCatId: string) => {
    const a: HTMLCollectionOf<Element> = document.getElementsByClassName(
      `${tCatId}`
    );

    for (let i = 0; i < a.length; i++) {
      a[i].classList.toggle("hidden");
    }
  };

  useEffect(() => {
    categories();
  }, []);
  return (
    <div className="">
      <div className="mt-5 text-center lg:text-left ">
        <h1 className="text-2xl">Categories</h1>
        <ul className="ml-3 mt-1">
          {topCategories &&
            topCategories.map((topItem: any) => {
              let subItems = catItems.filter(
                (item: any) => item.TopCatogryId === topItem.CatogryId
              );
              return (
                <div key={topItem.CatogryId}>
                  <li
                    className="hover:cursor-pointer"
                    onClick={() => toggleCategories(topItem.CatogryId)}
                    key={topItem.CatogryId}
                  >
                    {topItem.CatogryName}
                  </li>
                  {subItems.map((item: any) => (
                    <SubCategories key={item.CatogryId} item={item} />
                  ))}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Categories;

import { useNavigate } from "react-router-dom";
import { ISubCategories } from "../../ts/interfaces";
function SubCategories({ item }: ISubCategories) {
  const navigate = useNavigate();
  return (
    <div>
      <li
        className={`${item.TopCatogryId} hidden ml-4 hover:cursor-pointer
    `}
        onClick={() =>
          navigate("/CategoryFilter", { state: { itemId: item.CatogryId } })
        }
      >
        <span className="hover:bg-orange-600 px-3 py-0.5 rounded-sm">
          {item.CatogryName}
        </span>
      </li>
    </div>
  );
}

export default SubCategories;

interface IItem {
  CatogryId: String;
  TopCatogryId: String;
  CatogryName: String;
}

interface ISubCategories {
  item: IItem;
}

function SubCategories({ item }: ISubCategories) {
  return (
    <div>
      <li
        className={`${item.TopCatogryId} hidden ml-4 hover:cursor-pointer
    `}
      >
        <span className="hover:bg-orange-600 px-3 py-0.5 rounded-sm">
          {item.CatogryName}
        </span>
      </li>
    </div>
  );
}

export default SubCategories;

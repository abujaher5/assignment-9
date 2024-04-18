import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("estateCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-2 p-1 ">
      <h3 className="text-lg font-semibold">All Category</h3>

      {categories.map((category) => (
        <Link
          className="block  text-left font-semibold rounded-lg btn btn-ghost p-3"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;

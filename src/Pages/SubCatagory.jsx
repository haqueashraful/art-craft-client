import { useEffect, useState } from "react";
import SubCategoryCard from "../Components/SubCategoryCard";

const Subcategory = () => {
  const [subcategoryItem, setSubcategoryItem] = useState([]);
  useEffect(() => {
    fetch("https://art-craft-server.vercel.app/subCategory")
      .then((response) => response.json())
      .then((data) => {
        setSubcategoryItem(data);
      });
  });

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">
          Art & Craft Categories Section
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategoryItem.map((item) => (
          <SubCategoryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Subcategory;

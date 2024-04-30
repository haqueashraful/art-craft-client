import { useEffect, useState } from "react";
import SubCategoryCard from "../Components/SubCategoryCard";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

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
    <>
    <Helmet>
      <title>ArtCraft SubCategory</title>
    </Helmet>
    <div className="my-10">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["Art & Craft Categories Section"]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategoryItem.map((item) => (
          <SubCategoryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Subcategory;

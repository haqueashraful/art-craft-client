import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css/core';
import { useEffect, useState } from "react";

const Banner = () => {
  const [subcategoryItem, setSubcategoryItem] = useState([]);

  useEffect(() => {
    fetch("https://art-craft-server.vercel.app/subCategory")
      .then((response) => response.json())
      .then((data) => {
        setSubcategoryItem(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching subcategory data:", error);
      });
  }, []);

  return (
    <div className="my-10">
      <Splide
        options={{
          type: "loop",
          rewind: true,
          height: 500,
          autoplay: true, 
          interval: 1000,
          pauseOnHover: true,
          play: true,
        }}
        tag="section"
      >
        {subcategoryItem.map((item) => (
          <SplideSlide key={item._id}>
            <img
              src={item.imageUrl}
              className="object-cover object-center w-full h-full"
              alt={item.subCategoryName}
            />
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-5">
              <h1 className="text-4xl font-bold text-white">
                {item.subCategoryName}
              </h1>
              <p className="text-lg text-white">{item.shortDescription}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Banner;

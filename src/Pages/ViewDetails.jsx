import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Context } from "../context/MyContextProvider";
import Loading from "../Components/Loading";
import { FaStar } from "react-icons/fa6";

const ViewDetails = () => {
  const { loader } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);
  const data = useLoaderData();
  // const { id } = useParams();

  const {
    imageUrl,
    itemName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = data;

const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
const category = subcategoryName.split("_").map(capitalizeFirstLetter).join(" ");

  const handleToggleFavorite = () => {
    const favoriteEstates = JSON.parse(localStorage.getItem("favorite")) || [];

    if (isFavorite) {
      const updatedFavorites = favoriteEstates.filter(
        (estate) => estate.id !== data.id
      );
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoriteEstates, data];
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  if (loader) {
    return <Loading />;
  }

  return (
    <div className="w-full mx-auto p-4">
      <Helmet>
        <title>{itemName}</title>
      </Helmet>

      <div className=" w-full lg:grid  grid-cols-2 justify-center items-center gap-5">
        <div className=" w-full p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <h1 className="text-xl font-bold mb-2">{itemName}</h1>
              <button onClick={handleToggleFavorite}>
                {isFavorite ? (
                  <FaHeart className="w-5 h-5 mb-2 text-red-500" />
                ) : (
                  <FaRegHeart className="w-5 h-5 mb-2" />
                )}
              </button>
            </div>
            <h1 className="text-sm font-bold bg-green-400 rounded-full px-2 text-white">
              status:<span className="text-lg"> {stockStatus}</span>
            </h1>
            <p>{category}</p>
          </div>
          <div className="mb-4">
            <img
              src={imageUrl}
              alt={itemName}
              className="w-full h-[400px] rounded-lg"
            />
          </div>
        </div>
        <div className=" h-full p-4 rounded-lg shadow-md w-full space-y-4 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold mb-2"> {itemName}</h1>
          <p className="text-lg"><span className="text-black font-bold text-xl">Category:</span> {category}</p>
          <p className="text-gray-500 mb-2 text-lg">{shortDescription}</p>
          <p className="text-lg"><span className="text-black font-bold text-xl">Customization:</span> {customization}</p>
          <p className="text-lg">
           <span className="text-black font-bold text-xl">Rating:</span> {rating} <FaStar className="inline-block text-yellow-500"></FaStar>
          </p>
            <p className="text-lg"><span className="text-black font-bold text-xl">Price:</span> {`${price} per month`}</p>
            <p className="text-lg"><span className="text-black font-bold text-xl">Processing Time:</span> {`${processingTime} `}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

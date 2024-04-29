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
  const { id } = useParams();

  const {
    _id,
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
    <div className="max-w-xl mx-auto p-4">
      <Helmet>
        <title>{itemName}</title>
      </Helmet>
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
        <p>{subcategoryName}</p>
      </div>
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={itemName}
          className="w-full h-[400px] rounded-lg"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-lg font-bold mb-2">{itemName}</h1>
        <p className="text-gray-700 mb-2">{shortDescription}</p>
        <p>{customization}</p>
        <p>{rating} <FaStar className="inline-block text-yellow-500"></FaStar></p>
        <div className="flex items-center gap-3 text-gray-500 mb-2">
          <span>{`${price} per month`}</span>
          <span>{`${processingTime} `}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

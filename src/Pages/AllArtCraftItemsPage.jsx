import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import { Context } from "../context/MyContextProvider";
import { Typewriter } from "react-simple-typewriter";
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const AllArtCraftItemsPage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const { loader, isChecked } = useContext(Context);

  useEffect(() => {
    fetch("https://art-craft-server.vercel.app/allArtCraft")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) =>
        console.error("Error fetching art & craft items:", error)
      );
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loader) {
    return <Loading />;
  }

  return (
    <>
    <Helmet>
      <title>All Art & Craft Items</title>
    </Helmet>
    <div className=" py-8">
      <h1 className="text-3xl text-base-content font-bold mb-6">
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["All Art & Craft Items"]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <table className="divide-y divide-gray-200 w-full text-base-content overflow-hidden">
        <thead className={`${isChecked ? "bg-black" : "bg-gray-400"} text-white `}>
          <tr>
            <th className="text-center text-xs hidden md:table-cell font-medium uppercase tracking-wider">sl no</th> 
            <th className="lg:px-6 px-0 lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Image
            </th>
            <th className="lg:px-6 px-0 lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Item Name
            </th>
            <th className="lg:px-6 px-0 lg:py-3 hidden md:table-cell text-center text-xs font-medium uppercase tracking-wider">
              Subcategory
            </th>
            <th className="lg:px-6 px-0 lg:py-3 hidden md:table-cell text-center text-xs font-medium uppercase tracking-wider">
              Rating
            </th>
            <th className="lg:px-6 px-0 lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y text-base-content text-center divide-gray-200">
          {currentItems.map((item, index) => (
            <tr key={item._id}>
              <td className="hidden md:table-cell">{index+1}</td>
              <td className="lg:px-6 px-0 flex justify-center items-center lg:py-4 whitespace-nowrap overflow-hidden">
                <img
                  className="lg:w-40 w-20 lg:h-24 h-16"
                  src={item.imageUrl}
                  alt=""
                />
              </td>
              <td className="lg:px-6 px-0 lg:py-4 max-w-5 md:max-w-max text-wrap text-sm lg:text-lg whitespace-nowrap">
                {item.itemName}
              </td>
              <td className="lg:px-6 px-0 hidden md:table-cell lg:py-4 whitespace-nowrap">
                {item.subcategoryName
                  .split("_")
                  .map((word) => capitalizeFirstLetter(word))
                  .join(" ")}
              </td>
              <td className="lg:px-6 px-0 lg:py-4 hidden md:table-cell whitespace-nowrap">
                {item.rating} <FaStar className="text-yellow-500 inline-block" />
              </td>
              <td className="lg:px-6 px-0 lg:py-4 whitespace-nowrap text-sm font-medium">
                <Link
                  to={`/viewdetails/${item._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => paginate(i + 1)}
                className={`${
                  i + 1 === currentPage ? "bg-indigo-600 text-white" : "bg-white text-black"
                } font-semibold py-2 px-4 border border-gray-300 rounded hover:bg-indigo-50`}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default AllArtCraftItemsPage;

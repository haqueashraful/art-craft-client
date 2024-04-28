import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Subcategory from "./SubCatagory";
import Card from "../Components/Card";

const Home = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    fetch("https://art-craft-server.vercel.app/allArtCraft")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Banner />

      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-6"> Craft items section</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex">
            {[...Array(Math.ceil(items.length / itemsPerPage)).keys()].map(
              (number) => (
                <li
                  key={number}
                  className={`mx-1 px-3 py-2 border rounded-md cursor-pointer ${
                    currentPage === number + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <Subcategory />

    </div>
  );
};

export default Home;

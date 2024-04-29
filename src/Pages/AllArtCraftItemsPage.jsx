import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import { Context } from "../context/MyContextProvider";
const AllArtCraftItemsPage = () => {
  const [items, setItems] = useState([]);
  const {  loader } = useContext(Context);
  useEffect(() => {
      fetch('https://art-craft-server.vercel.app/allArtCraft')
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        })
        .catch((error) =>
          console.error("Error fetching art & craft items:", error)
        );
  }, []); 

  if (loader) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-base-content font-bold mb-6">All Art & Craft Items</h1>
      <table className=" divide-y divide-gray-200 w-full text-black">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="lg:px-6 px-2  lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Image
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Item Name
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Subcategory
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Email
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-center text-xs font-medium uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y text-center divide-gray-200">
          {items.map((item) => (
            <tr key={item._id}>
              <td className="lg:px-6 px-2 flex justify-center items-center  lg:py-4 whitespace-nowrap overflow-hidden">
                <img className="lg:w-40 w-20 lg:h-24 h-16" src={item.imageUrl} alt="" />
              </td>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap">{item.itemName}</td>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap">
                {item.subcategoryName}
              </td>
              <td className="lg:px-6 px-2  lg:py-4  hidden lg:flex justify-center items-center whitespace-nowrap ">{item.userEmail}</td>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap text-sm font-medium">
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
    </div>
  );
};

export default AllArtCraftItemsPage;

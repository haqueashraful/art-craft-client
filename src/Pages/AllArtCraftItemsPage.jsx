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
      <table className=" divide-y divide-gray-200 w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="lg:px-6 px-2  lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item Name
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subcategory
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="lg:px-6 px-2  lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item._id}>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap overflow-hidden">
                <img className="lg:w-40 w-20 lg:h-24 h-16" src={item.imageUrl} alt="" />
              </td>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap">{item.itemName}</td>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap">
                {item.subcategoryName}
              </td>
              <td className="lg:px-6 px-2  lg:py-4 hidden md:block ">{item.userEmail}</td>
              <td className="lg:px-6 px-2  lg:py-4 whitespace-nowrap text-right text-sm font-medium">
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

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/MyContextProvider";
import Loading from "../Components/Loading";
const MyArtCraftList = () => {
  const [items, setItems] = useState([]);
  const { user, loader } = useContext(Context);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://art-craft-server.vercel.app/allArtCraft/${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          console.log(data);
        })
        .catch((error) =>
          console.error("Error fetching art & craft items:", error)
        );
    }
  }, [user]); // Add user as a dependency

  if (loader) {
    return <Loading />;
  }
  console.log(user?.email);
  console.log(user);
  console.log(items);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Art & Craft Items</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subcategory
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Short Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.subcategoryName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.shortDescription}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.userEmail}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link
                  to={`/view-details/${item._id}`}
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

export default MyArtCraftList;

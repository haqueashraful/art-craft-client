




import { useContext } from 'react';
import { Context } from '../context/MyContextProvider';

const AllArtCraftItemsPage = () => {
    const {user} = useContext(Context)


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Art & Craft List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* {crafts.map((craft) => ( */}
          <div  className="bg-white rounded-lg shadow-md p-6">
            <img  className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold mb-2"></h2>
            <p className="text-gray-600 mb-2">Price: </p>
            <p className="text-gray-600 mb-2">Rating:</p>
            <p className="text-gray-600 mb-2">Customization: </p>
            <p className="text-gray-600 mb-2">Stock Status: </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
      </div>
    </div>
  );
};

export default AllArtCraftItemsPage;

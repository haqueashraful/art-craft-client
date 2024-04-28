import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
    const navigate = useNavigate();

    const handleViewDetails = (itemId) => {
            navigate(`/viewdetails/${itemId}`);
      };
    return (
        <div className="border border-base-content bg-white rounded-lg shadow-md p-6">
        <img src={item.imageUrl} alt={item.itemName} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg text-gray-600 font-semibold mb-2">{item.itemName}</h2>
        <p className="text-gray-600 mb-2">Subcategory: {item.subcategoryName}</p>
        <p className="text-gray-600 mb-2">Short Description: {item.shortDescription}</p>
        <p className="text-gray-600 mb-2">Price: ${item.price}</p>
        <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
        <p className="text-gray-600 mb-2">Processing Time: {item.processingTime}</p>
        <button
          onClick={() => handleViewDetails(item._id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </button>
      </div>
    );
};

export default Card;
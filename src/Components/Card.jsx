import { useNavigate } from "react-router-dom";
import PropType from "prop-types";

const Card = ({item}) => {
    const navigate = useNavigate();
    const {_id, itemName, imageUrl, subcategoryName, shortDescription, price, rating, processingTime} = item; 

    const handleViewDetails = (itemId) => {
            navigate(`/viewdetails/${itemId}`);
      };
    return (
        <div className="border border-base-content  rounded-lg shadow-md p-6">
        <img src={imageUrl} alt={itemName} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg  font-semibold mb-2">{itemName}</h2>
        <p className=" text-base-content mb-2">Subcategory: {subcategoryName}</p>
        <p className=" text-base-content mb-2">Short Description: {shortDescription}</p>
        <p className=" text-base-content mb-2">Price: ${price}</p>
        <p className=" text-base-content mb-2">Rating: {rating}</p>
        <p className=" text-base-content mb-2">Processing Time: {processingTime}</p>
        <button
          onClick={() => handleViewDetails(_id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </button>
      </div>
    );
};

Card.propTypes = {
    item: PropType.object.isRequired,
    handleViewDetails: PropType.func.isRequired
}

export default Card;
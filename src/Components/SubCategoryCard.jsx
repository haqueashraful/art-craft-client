import { useNavigate } from "react-router-dom";
import PropType from "prop-types";
const SubCategoryCard = ({item}) => {
    const navigate = useNavigate();
    const {subCategoryName, imageUrl, shortDescription} = item;
    const handleViewDetails = (itemName) => {
        const formattedItemName = itemName.toLowerCase().split(' ').join('_');
        console.log(formattedItemName);
        navigate(`categorywise/${formattedItemName}`);
    };
    
    return (
        <div onClick={() => handleViewDetails(subCategoryName)} className="border border-base-content rounded-lg shadow-md p-6">
        <img src={imageUrl} alt={subCategoryName} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg text-base-content font-semibold mb-2">{subCategoryName}</h2>
        <p className="text-base-content mb-2"> {shortDescription}</p>
      </div>
    );
};

SubCategoryCard.propTypes = {
    item: PropType.object.isRequired,
    handleViewDetails: PropType.func.isRequired,
    navigate: PropType.func.isRequired
}

export default SubCategoryCard;
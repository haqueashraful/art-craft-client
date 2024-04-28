import { useNavigate } from "react-router-dom";

const SubCategoryCard = ({item}) => {
    const navigate = useNavigate();

    const handleViewDetails = (itemName) => {
        const formattedItemName = itemName.toLowerCase().split(' ').join('_');
        console.log(formattedItemName);
        navigate(`categorywise/${formattedItemName}`);
    };
    
    return (
        <div onClick={() => handleViewDetails(item.subCategoryName)} className="bg-white rounded-lg shadow-md p-6">
        <img src={item.imageUrl} alt={item.subCategoryName} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold mb-2">{item.subCategoryName}</h2>
        <p className="text-gray-600 mb-2">Subcategory: {item.shortDescription}</p>
      </div>
    );
};

export default SubCategoryCard;
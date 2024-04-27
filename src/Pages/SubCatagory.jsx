
const Subcategory = () => {

  // Dummy data for demonstration
  const items = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      itemName: 'Item 1',
      subcategoryName: 'Subcategory 1',
      shortDescription: 'Short description of item 1',
      price: 20,
      rating: 4,
      processingTime: '1-3 days',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      itemName: 'Item 2',
      subcategoryName: 'Subcategory 1',
      shortDescription: 'Short description of item 2',
      price: 30,
      rating: 5,
      processingTime: '2-4 days',
    },
    // Add more dummy data as needed
  ];

  const handleViewDetails = (itemId) => {
    // Redirect to the View Details Page for the selected item
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Art & Craft Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <img src={item.imageUrl} alt={item.itemName} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold mb-2">{item.itemName}</h2>
            <p className="text-gray-600 mb-2">Subcategory: {item.subcategoryName}</p>
            <p className="text-gray-600 mb-2">Short Description: {item.shortDescription}</p>
            <p className="text-gray-600 mb-2">Price: ${item.price}</p>
            <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
            <p className="text-gray-600 mb-2">Processing Time: {item.processingTime}</p>
            <button
              onClick={() => handleViewDetails(item.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subcategory;

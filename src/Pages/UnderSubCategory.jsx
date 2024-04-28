import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const UnderSubCategory = () => {
  const data = useLoaderData();

  console.log(data);
  const categoryName = data[0]?.subcategoryName
  .split('_')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  return (
    <div>
        <div className=" flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UnderSubCategory;

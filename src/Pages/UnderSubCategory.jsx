import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { Typewriter } from "react-simple-typewriter";

const UnderSubCategory = () => {
  const data = useLoaderData();
  if(data.length == 0){
    return <h1 className="text-3xl font-bold flex justify-center items-center">NO data Found</h1>
  }

  console.log(data);
  const categoryName = data[0]?.subcategoryName
  .split('_')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  return (
    <div className="my-10">
        <div className=" flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">
            {/* {categoryName} */}
            <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={[categoryName]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            </h1>
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

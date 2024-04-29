import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/MyContextProvider";
import Loading from "../Components/Loading";
import swal from "sweetalert";
import { FaStar } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";

const MyArtCraftList = () => {
  const [crafts, setCrafts] = useState([]);
  const navigate = useNavigate();
  const { user, loader } = useContext(Context);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://art-craft-server.vercel.app/allArtCraft/userEmail/${user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCrafts(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user]); // Dependency array added to ensure useEffect runs only once

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://art-craft-server.vercel.app/allArtCraft/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingCrafts = crafts.filter(
                (craft) => craft._id !== id
              );
              setCrafts(remainingCrafts);
            }
          })
          .catch((error) => {
            console.error("Error submitting data:", error);
          });
        swal("Deleted!", "Your imaginary file has been deleted!", "success");
      }
    });
  };
  if (loader) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["My Art & Craft List"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {crafts.map((craft) => (
          <div key={craft._id} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={craft.imageUrl}
              className="w-full h-48 object-cover mb-4"
              alt={craft.title}
            />
            <h2 className="text-lg font-semibold mb-2">{craft.itemName}</h2>
            <p className="text-gray-600 mb-2">Price: ${craft.price}</p>
            <p className="text-gray-600 mb-2 flex items-center gap-1">
              Rating: {craft.rating} <FaStar className="text-yellow-500" />
            </p>
            <p className="text-gray-600 mb-2">
              Customization: {craft.customization}
            </p>
            <p className="text-gray-600 mb-2">
              Stock Status: {craft.stockStatus}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  navigate(`/updateartcraft/${craft._id}`);
                }}
                className="bg-blue-500 flex justify-center items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <RiEdit2Fill className="text-xl text-white" />
                Update
              </button>
              <button
                onClick={() => {
                  handleDelete(craft._id);
                }}
                className="bg-red-500 flex justify-center items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                <MdDelete className="text-xl" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;

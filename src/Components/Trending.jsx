import { useEffect, useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Trending = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://art-craft-server.vercel.app/allArtCraft")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-10 grid  grid-cols-1 md:grid-cols-4 gap-3">
      <div className=" col-span-3 grid grid-cols-3 gap-4">
        {data.slice(0, 6).map((item) => (
          <div
            className="p-2 border border-base-content rounded-md overflow-hidden w-full h-[300px]"
            key={item._id}
          >
            <img className="h-full w-full" src={item.imageUrl} alt="" />
          </div>
        ))}
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <span style={{ color: "red", fontWeight: "bold", fontSize: "40px" }}>
          <Typewriter
            words={["Trending Now"]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <button onClick={() => navigate("/allArtCraft")}  className="bg-red-500 hover:bg-red-200 hover:text-black text-white px-4 py-2 rounded-md mt-4 flex justify-center items-center gap-2">Browse All <IoMdShareAlt /></button>
      </div>
    </div>
  );
};

export default Trending;

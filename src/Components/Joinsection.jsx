import { MdOutlineMailOutline } from "react-icons/md";
import imgbg from "../assets/image1.jpg";
import img1 from "../assets/image2.jpg";
import img2 from "../assets/image3.jpg";
import { Typewriter } from "react-simple-typewriter";

const Joinsection = () => {
  return (
    <div className="my-10">
      <div
        className="py-10 mt-10 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${imgbg})`,
        }}
      >
        <div className="flex md:flex-row flex-col gap-5 justify-center  lg:mx-36 md:mx-5 mx-2">
          <div
            className="md:w-8/12 w-full p-4 rounded"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="bg-[#f2ecec62] flex flex-col justify-center  items-center p-4 border rounded h-full backdrop-blur-sm">
              <h1 className="text-center md:text-4xl text-white font-semibold">
              <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["Crafts according to your needs"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
              </h1>
              <p className="text-center text-white text-xl mt-3">
                "We promise to deliver quality & creativity" communicates a
                commitment to providing products or services of high standards
                and originality.
              </p>
            </div>
          </div>
          <div
            className="md:w-1/3 w-full rounded p-5 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="p-5 border space-y-4 rounded bg-[#ffffff5e]">
              <h1 className="text-3xl font-semibold text-center">Subscribe</h1>
              <p className="text-gray-900">
                Register to our newsletter & get 20% OFF for your first order
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="@email.com"
                  className="input w-full"
                />
                <MdOutlineMailOutline className="text-xl -ml-7" />
              </div>
            </div>
          </div>
        </div>
                
      </div>
    </div>
  );
};

export default Joinsection;

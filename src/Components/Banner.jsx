import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const Banner = () => {
  return (
    <div>
      <Splide
        options={{
          type: "fade", 
          rewind: true,
          height: 600,
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
        }}
      >
        <SplideSlide>
          <img src={img1} className="object-cover object-center w-full h-full" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={img2} className="object-cover object-center w-full h-full" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={img3} className="object-cover object-center w-full h-full" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Banner;

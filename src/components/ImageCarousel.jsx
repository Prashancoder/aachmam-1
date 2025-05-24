// components/ImageCarousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";

const images = ["/images/re1.jpeg", "/images/re2.jpeg", "/images/re3.jpeg", "/images/re4.jpeg", "/images/re5.jpeg" , "/images/re6.jpeg",  "/images/re7.jpeg",  "/images/re8.jpeg",  "/images/re9.jpeg"];

const ImageCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Pagination, Autoplay]} // removed Navigation module
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Transformation ${index + 1}`}
              className="w-full h-50 object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;

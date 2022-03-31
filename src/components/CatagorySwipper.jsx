import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CatagorySwipper = ({ animeDataArray, sectionTitle }) => {
    // TODO: Add hover effects to the images
    // TODO: Chnage navigation color
  return (
    <div className="container-lg mt-4">
      <div className="row justify-content-center align-items-center">
      <div className="col-lg-11">
        <h3 className="h2 text-align-start text-light mb-3">{sectionTitle}</h3>
      </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-11">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={1}
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
          >
          {  animeDataArray.map((anime, index) => (
              <SwiperSlide key={index}>
                <img
                  className="img-fluid rounded shadow "
                  src={anime.attributes.posterImage.small}
                  alt="yes"
                />
              </SwiperSlide>
          ))
          }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CatagorySwipper;

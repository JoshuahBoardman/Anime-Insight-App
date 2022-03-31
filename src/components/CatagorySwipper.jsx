import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CatagorySwipper = ({ trendingAnimeData }) => {
    // TODO: Add hover effects to the images
    // TODO: Chnage navigation color
  return (
    <div className="container-lg my-5">
      <div className="row justify-content-center align-items-center">
      <div className="col-lg-11">
        <h3 className="h2 text-align-start text-light mb-3">Trending Now</h3>
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
            <SwiperSlide>
            <a href=""></a>
              <img
                className="img-fluid rounded shadow "
                src={trendingAnimeData[0].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[1].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[2].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[3].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[4].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[5].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[6].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[7].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[8].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded shadow"
                src={trendingAnimeData[9].attributes.posterImage.small}
                alt="yes"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CatagorySwipper;

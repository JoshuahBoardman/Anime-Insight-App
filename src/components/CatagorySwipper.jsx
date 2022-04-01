import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./Loading";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CatagorySwipper = ({ apiPath, sectionTitle }) => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Might have to add dependency
  useEffect(() => {
    async function getAnimeData() {
      try {
        const response = await fetch(apiPath);
        if (response.status !== 200) return;
        const data = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    }

    async function handleAnimeData() {
      const data = await getAnimeData();
      setAnimeData([...data.data]);
    }

    handleAnimeData();
  }, [apiPath]);

  useEffect(() => {
    if (animeData.length > 0) setIsLoading(false);
    console.log(animeData);
  }, [animeData]);

  function displayAnimeData() {
    return animeData.map((anime, index) => (
      <SwiperSlide key={index}>
        <img
          className="img-fluid rounded shadow-sm"
          src={anime.attributes.posterImage.small}
          //TODO: Change alt text
          alt="yes"
        />
      </SwiperSlide>
    ));
  }

  // TODO: Add hover effects to the images
  // TODO: Chnage navigation color
  return (
    <section className="container-lg mt-2 mt-sm-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-11">
          <h3 className="h2 text-align-start text-light mb-3">
            {sectionTitle}
          </h3>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-11">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            slidesPerGroup={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {isLoading ? <Loading /> : displayAnimeData()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CatagorySwipper;
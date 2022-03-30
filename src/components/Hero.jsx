import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Hero = ({ trendingAnimeData }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      {/* TODO: Add a header that says something like "Trending above the carousel maybe?" */}
      {/* TODO: Add some margin around the carousel to give the page some white or black maybe? */}
      {/* TODO: Make the carousel clickable. */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={trendingAnimeData[0].attributes.coverImage.large}
            alt="First slide"
            style={{filter: "brightness(60%)"}}
          />
          <Carousel.Caption>
            <h3 className="h2 mb-1">{trendingAnimeData[0].attributes.canonicalTitle}</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trendingAnimeData[1].attributes.coverImage.large}
            alt="First slide"
            style={{filter: "brightness(60%)"}}
          />
          <Carousel.Caption>
            <h3 className="h2 mb-1">{trendingAnimeData[1].attributes.canonicalTitle}</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trendingAnimeData[2].attributes.coverImage.large}
            alt="First slide"
            style={{filter: "brightness(60%)"}}
          />
          <Carousel.Caption>
            <h3 className="h2 mb-1">{trendingAnimeData[2].attributes.canonicalTitle}</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;

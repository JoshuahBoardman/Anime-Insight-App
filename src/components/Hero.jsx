import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Loading from "./Loading";

const Hero = ({ apiPath }) => {
  const [index, setIndex] = useState(0);
  const [trendingAnimeData, setTrendingAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Might have to add dependency
  useEffect(() => {
    async function getTrendingAnimeData() {
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

    async function handleTrendingAnimeData() {
      const data = await getTrendingAnimeData();
      setTrendingAnimeData([...data.data]);
    }

    handleTrendingAnimeData();
  }, [apiPath]);

  useEffect(() => {
    if (trendingAnimeData.length > 0) setIsLoading(false);
    // console.log(trendingAnimeData);
  }, [trendingAnimeData]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // TODO: Ajust caption styling and size
  return (
    <section>
      {/* TODO: Make the carousel clickable. */}

      {isLoading ? (
        <Loading />
      ) : (
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="shadow"
        >
          <Carousel.Item>
            <Link to={`anime/${trendingAnimeData[0].id}`}>
              <img
                className="d-block w-100"
                src={trendingAnimeData[0].attributes.coverImage.large}
                alt="First slide"
                style={{ filter: "brightness(65%)" }}
              />
              <Carousel.Caption>
                <h3 className="mb-1 mt-5">
                  {trendingAnimeData[0].attributes.canonicalTitle}
                </h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`anime/${trendingAnimeData[1].id}`}>
              <img
                className="d-block w-100"
                src={trendingAnimeData[1].attributes.coverImage.large}
                alt="First slide"
                style={{ filter: "brightness(65%)" }}
              />
              <Carousel.Caption>
                <h3 className="h2 mb-1">
                  {trendingAnimeData[1].attributes.canonicalTitle}
                </h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`anime/${trendingAnimeData[2].id}`}>
              <img
                className="d-block w-100"
                src={trendingAnimeData[2].attributes.coverImage.large}
                alt="First slide"
                style={{ filter: "brightness(65%)" }}
              />
              <Carousel.Caption>
                <h3 className="h2 mb-1">
                  {trendingAnimeData[2].attributes.canonicalTitle}
                </h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      )}
    </section>
  );
};

export default Hero;

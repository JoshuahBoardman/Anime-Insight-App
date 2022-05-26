import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import Loading from "./Loading";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchResultsDisplay = ({ baseApiPath }) => {
  const { genreName } = useParams();

  const [animeGenreData, setAnimeGenreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAnimeGenreData(genre) {
      try {
        const response = await fetch(
          `${baseApiPath}/anime?filter[genres]=${genre}&page[limit]=20&page[offset]=0`
        );
        if (response.status !== 200) return;
        const data = await response.json();
        setIsLoading(false);
        // console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    }

    async function handleAnimeGenreData(genre) {
      const data = await getAnimeGenreData(genre);
      setAnimeGenreData([]);
      setAnimeGenreData([...data.data]);
    }

    handleAnimeGenreData(genreName);
  }, [baseApiPath, genreName]);

  function displayAnimeGenreData() {
    if (animeGenreData.length <= 0) {
      return (
        <Col
          sm={12}
          className="mb-5 d-flex justify-content-center"
        >
          <div className="text-light lead fs-3"> Genre not found...</div>
        </Col>
      );
    }
    return animeGenreData.map((anime, index) => {
      return (
        <Col
          xxl={3}
          md={4}
          sm={6}
          className="mb-5 d-flex justify-content-center"
        >
          <div key={index}>
            <Link to={`../anime/${anime.id}`}>
              <img
                className="img-fluid rounded shadow-sm"
                src={anime.attributes.posterImage.small}
                //TODO: Change alt text
                alt="yes"
              />
            </Link>
            ;
          </div>
        </Col>
      );
    });
  }

  return (
    <section style={{ minHeight: "100vh" }}>
      <Container fluid="md" className="mt-4 mb-3">
        <Row>
          <Col className="d-flex justify-content-center 5 mb-3">
            <h2 className="text-light mt-3">Genre searched for: {genreName}</h2>
          </Col>
        </Row>
        <Row>{isLoading ? <Loading /> : displayAnimeGenreData()}</Row>
      </Container>
    </section>
  );
};

export default SearchResultsDisplay;

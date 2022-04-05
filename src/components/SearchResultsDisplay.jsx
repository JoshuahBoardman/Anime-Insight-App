import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchResultsDisplay = ({ baseApiPath }) => {
  const { genreName } = useParams();
  const [animeGenreData, setAnimeGenreData] = useState([]);

  useEffect(() => {
    async function getAnimeGenreData(genre) {
      try {
        const response = await fetch(
          `${baseApiPath}/anime?filter[genres]=${genre}&page[limit]=20&page[offset]=0`
        );
        if (response.status !== 200) return;
        const data = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    }

    async function handleAnimeGenreData(genre) {
      const data = await getAnimeGenreData(genre);
      setAnimeGenreData([...data.data]);
    }

    handleAnimeGenreData(genreName);
  }, [baseApiPath, genreName]);

  return <div>You are at {genreName}</div>;
};

export default SearchResultsDisplay;

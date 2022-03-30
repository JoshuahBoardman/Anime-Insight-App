import React, { useState, useEffect } from "react";
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loading from "./components/Loading";

function App() {
  const BASE_API_PATH = "https://kitsu.io/api/edge";

  const [trendingAnimeData, setTrendingAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleTrendingAnimeData();
    if (trendingAnimeData.length > 0) setIsLoading(false);
    console.log(trendingAnimeData);
  });

  // TODO: ADD Loading State
  async function getTrendingAnimeData() {
    try {
      const response = await fetch(`${BASE_API_PATH}/trending/anime`);
      if (response.status !== 200) return;
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleTrendingAnimeData() {
    const data = await getTrendingAnimeData();
    setTrendingAnimeData([...data.data]);
  }

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <Hero trendingAnimeData={trendingAnimeData} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

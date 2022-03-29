import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const BASE_API_PATH = "https://kitsu.io/api/edge";

  const [trendingAnimeData, setTrendingAnimeData] = useState([])

  useEffect(() =>  {
    handleTrendingAnimeData();
    console.log(trendingAnimeData)
  }, [])

  async function getTrendingAnimeData() {
    try {
      const response = await fetch(`${BASE_API_PATH}/trending/anime`);
      if(response.status !== 200) return
      const data = await response.json();
      // console.log(data);
      return data
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
      <Footer />
    </>
  );
}

export default App;

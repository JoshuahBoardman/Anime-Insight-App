import React, { useState, useEffect } from "react";
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import CatagorySwipper from "./components/CatagorySwipper";

function App() {
  //TODO: Might want to pass base URL down to components where they can handle their own API calls
  const BASE_API_PATH = "https://kitsu.io/api/edge";

  const [trendingAnimeData, setTrendingAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Might have to add dependency
  useEffect(() => {
    async function handleTrendingAnimeData() {
      const data = await getTrendingAnimeData();
      setTrendingAnimeData([...data.data]);
    }

    handleTrendingAnimeData();
  }, []);

  useEffect(() => {
    if (trendingAnimeData.length > 0) setIsLoading(false);
    // console.log(trendingAnimeData);
  }, [trendingAnimeData]);

  async function getTrendingAnimeData() {
    try {
      const response = await fetch(
        `${BASE_API_PATH}/anime?page[limit]=20&page[offset]=0`
      );
      if (response.status !== 200) return;
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-secondary">
      <Header />
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          [
            /* TODO Make offset random */
            <Hero trendingAnimeData={trendingAnimeData} />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/trending/anime`}
              sectionTitle={"Trending Now"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=adventure&page[limit]=20&page[offset]=0`}
              sectionTitle={"Adventure"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=action&page[limit]=20&page[offset]=0`}
              sectionTitle={"Action"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=comedy&page[limit]=20&page[offset]=0`}
              sectionTitle={"Comedy"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=slice-of-life&page[limit]=20&page[offset]=0`}
              sectionTitle={"Slice of Life"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=drama&page[limit]=20&page[offset]=0`}
              sectionTitle={"Drama"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=fantasy&page[limit]=20&page[offset]=0`}
              sectionTitle={"Fantasy"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=horror&page[limit]=20&page[offset]=0`}
              sectionTitle={"Horror"}
            />,
            <CatagorySwipper
              apiPath={`${BASE_API_PATH}/anime?filter[genres]=romance&page[limit]=20&page[offset]=0`}
              sectionTitle={"Romance"}
            />,
          ].map((compnent, index) => <div key={index}>{compnent}</div>)
        )}
      </section>
      <section></section>

      <Footer />
    </div>
  );
}

export default App;

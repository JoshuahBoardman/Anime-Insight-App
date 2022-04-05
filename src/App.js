import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CatagorySwipper from "./components/CatagorySwipper";
import AnimeProfileDisplay from "./components/AnimeProfileDisplay";
import SearchResultsDisplay from "./components/SearchResultsDisplay";

function App() {
  const BASE_API_PATH = "https://kitsu.io/api/edge";

  const [animeSectionData] = useState([
    {
      sectionTitle: "Trending Now",
      apiPath: "/trending/anime",
    },
    {
      sectionTitle: "Adventure",
      apiPath: "/anime?filter[genres]=adventure&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Action",
      apiPath: "/anime?filter[genres]=action&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Comedy",
      apiPath: "/anime?filter[genres]=comedy&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Slice of Life",
      apiPath:
        "/anime?filter[genres]=slice-of-life&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Drama",
      apiPath: "/anime?filter[genres]=drama&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Fantasy",
      apiPath: "/anime?filter[genres]=fantasy&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Horror",
      apiPath: "/anime?filter[genres]=horror&page[limit]=20&page[offset]=0",
    },
    {
      sectionTitle: "Romance",
      apiPath: "/anime?filter[genres]=romance&page[limit]=20&page[offset]=0",
    },
  ]);

  return (
    <BrowserRouter>
      <div className="bg-secondary">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div className="pb-3">
                {[
                  /* TODO Make offset random 5350(for comedy)*/
                  <Hero apiPath={`${BASE_API_PATH}/trending/anime`} />,
                  animeSectionData.map((data, index) => (
                    <CatagorySwipper
                      key={index}
                      apiPath={`${BASE_API_PATH}${data.apiPath}`}
                      sectionTitle={data.sectionTitle}
                    />
                  )),
                ].map((compnent, index) => (
                  <div key={index}>{compnent}</div>
                ))}
              </div>
            }
          />
          <Route
            path="anime/:animeId"
            element={<AnimeProfileDisplay baseApiPath={BASE_API_PATH} />}
          />
          <Route
            path="genre/:genreName"
            element={<SearchResultsDisplay baseApiPath={BASE_API_PATH} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

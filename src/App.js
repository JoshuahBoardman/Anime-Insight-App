import React, { useState } from "react";
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CatagorySwipper from "./components/CatagorySwipper";

function App() {
  const BASE_API_PATH = "https://kitsu.io/api/edge";

  const [animecSectionData] = useState([
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
    <div className="bg-secondary">
      <Header />
      <section>
        {[
          /* TODO Make offset random 5350(for comedy)*/
          <Hero apiPath={`${BASE_API_PATH}/trending/anime`} />,
          animecSectionData.map((data, index) => (
            <CatagorySwipper
              key={index}
              apiPath={`${BASE_API_PATH}${data.apiPath}`}
              sectionTitle={data.sectionTitle}
            />
          )),
        ].map((compnent, index) => (
          <div key={index}>{compnent}</div>
        ))}
      </section>
      <section></section>

      <Footer />
    </div>
  );
}

export default App;

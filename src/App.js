import React, { useState } from "react";
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CatagorySwipper from "./components/CatagorySwipper";

function App() {
  //TODO: Might want to pass base URL down to components where they can handle their own API calls
  const BASE_API_PATH = "https://kitsu.io/api/edge";

  return (
    <div className="bg-secondary">
      <Header />
      <section>
        {[
          /* TODO Make offset random 5350(for comedy)*/
          <Hero apiPath={`${BASE_API_PATH}/trending/anime`} />,
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

import React from "react";

const AnimeProfileDisplay = ({ animeData }) => {
  console.log(animeData);
  return (
    <section>
      <div className="container py-5">
        <div className="row justify-content-center align-items-top justify-content-md-between justify-content-xl-around mb-5 mt-3">
          
          <div className="col-md-6 col-lg-7 col-xl-5 mb-3">
            <h1 className="text-light display-4 mb-4">
              {animeData.attributes.canonicalTitle}
            </h1>
            <h3 className="fw-bold h4 text-light">Description:</h3>
            <p className="text-light lead">
              {animeData.attributes.description}
            </p>
          </div>
          <div className="  col-md-5 col-lg-4">
            <div className="card shadow rounded bg-primary text-light p-1 mb-5">
              <img
                className="card-img-top img-fluid rounded"
                src={animeData.attributes.posterImage.large}
                //TODO: Change alt text
                alt={animeData.attributes.canonicalTitle}
              />
              <div className="card-body text-center">
                <div className="mb-2">
                  <h3 className="card-title h5 fw-bold">Title:</h3>
                  <div className="card-text fs-6">
                    {animeData.attributes.canonicalTitle}
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="card-title h5 fw-bold">Age Ratinge:</h3>
                  <div className="card-text fs-6">
                    {animeData.attributes.ageRating} -
                    {animeData.attributes.ageRatingGuide}
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="card-title h5 fw-bold">Rating:</h3>
                  <div className="card-text fs-6">
                    {animeData.attributes.averageRating}/100%
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="card-title h5 fw-bold">Media Type:</h3>
                  <div className="card-text fs-6">
                    {animeData.attributes.showType}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeProfileDisplay;

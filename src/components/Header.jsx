import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary shadow-sm">
        <div className="container fluid">
          {/* TODO: maybe add a book with a eye as a logo */}
          <div className="navbar-brand">Anime Insight</div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* TODO: change search for a eye-glass, maybe a input-group*/}
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;

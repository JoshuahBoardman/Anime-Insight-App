import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header>
      <nav className="navbar navbar-dark bg-primary shadow">
        <div className="container fluid">
          {/* TODO: maybe add a book with a eye as a logo */}
          <Link to="/">
            <div className="navbar-brand">Anime Insight</div>
          </Link>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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

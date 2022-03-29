import React from 'react'

const Header = () => {
  return (
      <header>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container fluid">
                <div className="navbar-brand">Anime Insight</div>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  {/* TODO: change search for a eye-glass, maybe a input-group*/}
                  <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
      </header>
  )
}

export default Header
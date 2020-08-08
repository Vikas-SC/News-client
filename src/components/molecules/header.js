import React from 'react';

const Header = ({ }) => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark blue scrolling-navbar">
        <a className="navbar-brand" href="#"><strong>NEWS</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>
  )
}

export default Header;
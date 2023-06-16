import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/">
              M<FontAwesomeIcon icon={faGlobe} />
              VES
            </Link>
          </div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/latest-news">Latest News</Link>
            <Link to="/product-reviews">Product Reviews</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

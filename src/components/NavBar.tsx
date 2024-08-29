import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-start">
            <a href="/" className="nav-start-link">
              <div className="nav-start-link-container">
                <img
                  src="https://cssocietyusm.com/assets/logos/organizations/cs-soc-official.svg"
                  alt="CS Society Logo"
                  className="logo"
                />
                <div className="logo-name">
                  <div>USM Computer</div>
                  <div>Science Society</div>
                </div>
              </div>
            </a>
          </div>
          <div className="navbar-end">
            <ul className="navbar-menu">
              <li>
                <Link to="/about" className="nav-btn">
                  <span className="nav-text">About</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="nav-btn">
                  <span className="nav-text">Events</span>
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                &#9776;
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="/about" className="dropdown-item">
                    About
                  </a>
                  <a href="/events" className="dropdown-item">
                    Events
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="separation"></div>
    </>
  );
}

export default NavBar;

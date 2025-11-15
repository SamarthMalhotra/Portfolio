import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
function NavBar() {
  const [theme, setTheme] = useState("light-theme");
  const toggleButton = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    console.log(theme);
  };
  //It is use to set the dark mode
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav
      className="navbar navbar-expand-lg position-fixed top-0 z-3"
      style={{ width: "100vw" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarColor02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/academics" className="nav-link active">
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link active">
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <span
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "2rem",
          }}
          onClick={toggleButton}
        >
          {theme === "light-theme" ? (
            <IoSunnyOutline size={30} style={{ color: "yellow" }} />
          ) : (
            <IoMoonOutline size={30} style={{ color: "black" }} />
          )}
        </span>
      </div>
    </nav>
  );
}
export default NavBar;

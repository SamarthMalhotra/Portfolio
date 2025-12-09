import { Link } from "react-router-dom";
export default function FooterLink() {
  return (
    <>
      <ul className="nav justify-content-center justify-content-xs-between text-decoration-underline">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link text-body-secondary px-2 px-lg-5  text-decoration-underline linkhover"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className="nav-link px-2 px-lg-5 text-body-secondary text-decoration-underline linkhover"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/academics"
            className="nav-link px-2 px-lg-5 text-body-secondary  text-decoration-underline linkhover"
          >
            Academics
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/skills"
            className="nav-link px-1 px-lg-5 text-body-secondary  text-decoration-underline linkhover"
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className="nav-link px-1 px-lg-5 text-body-secondary  text-decoration-underline linkhover"
          >
            Projects
          </Link>
        </li>
      </ul>
    </>
  );
}

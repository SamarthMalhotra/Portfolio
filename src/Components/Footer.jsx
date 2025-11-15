import { Link } from "react-router-dom";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="w-100 mt-auto  h-6">
      <ul className="nav justify-content-center">
        <li className="nav-item ">
          <Link to="/" className="nav-link text-body-secondary px-2 fw-bold">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className="nav-link px-2 text-body-secondary fw-bold"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/academics"
            className="nav-link px-2 text-body-secondary fw-bold"
          >
            Academics
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/skills"
            className="nav-link px-2 text-body-secondary fw-bold"
          >
            Skills
          </Link>
        </li>
      </ul>
      <div className="text-center text-body-secondary  d-flex justify-content-evenly pb-2">
        <Link
          to="https://github.com/SamarthMalhotra"
          className="fs-3 text-black"
          target="_blank"
        >
          <IoLogoGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/samarth-malhotra-619211296"
          className="fs-3 text-blue"
          target="_blank"
        >
          <RxLinkedinLogo />
        </Link>
        <a
          href="mailto:samarthmalhotra4200@gmail.com"
          className="fs-3 text-blue"
        >
          <MdOutlineEmail />
        </a>
      </div>
    </footer>
  );
}
export default Footer;

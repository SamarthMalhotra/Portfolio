import { Link } from "react-router-dom";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import FooterLink from "./FooterLink";
import "./Footer.css";
function Footer() {
  return (
    <footer className="w-100 footerLinks">
      <FooterLink />
      <div className="text-center text-body-secondary  d-flex justify-content-evenly pb-1">
        <Link
          to="https://github.com/SamarthMalhotra"
          className="fs-3 fs-xs-4 text-black "
          target="_blank"
        >
          <IoLogoGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/samarth-malhotra-619211296"
          className="fs-3 fd-xs-4 text-blue"
          target="_blank"
        >
          <RxLinkedinLogo />
        </Link>
        <a
          href="mailto:samarthmalhotra4200@gmail.com"
          className="fs-3 fs-xs-4 text-blue "
        >
          <MdOutlineEmail />
        </a>
      </div>
    </footer>
  );
}
export default Footer;

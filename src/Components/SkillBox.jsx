import "./Skill.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaHtml5, FaBootstrap, FaJs, FaNodeJs } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
import { IoLogoGithub, IoLogoCss3 } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

function SkillBox() {
  return (
    <div className="skillBox w-100">
      <br />
      <h2 className="skill mt-lg-5 mb-lg-2 text-center">SKILLS</h2>

      <div className="skillDiv">
        {/* HTML */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <FaHtml5 className="skillIcon" style={{ color: "orange" }} />
          <h4 className="skillTitle">HTML5</h4>
        </div>

        {/* CSS */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <IoLogoCss3 className="skillIcon" style={{ color: "blue" }} />
          <h4 className="skillTitle">CSS3</h4>
        </div>

        {/* Bootstrap */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <FaBootstrap className="skillIcon" style={{ color: "purple" }} />
          <h4 className="skillTitle">Bootstrap</h4>
        </div>

        {/* JavaScript */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <FaJs className="skillIcon" style={{ color: "yellow" }} />
          <h4 className="skillTitle">JavaScript</h4>
        </div>

        {/* React */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <RiReactjsFill className="skillIcon" style={{ color: "skyblue" }} />
          <h4 className="skillTitle">React JS</h4>
        </div>

        {/* Node */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <FaNodeJs className="skillIcon" style={{ color: "green" }} />
          <h4 className="skillTitle">Node JS</h4>
        </div>

        {/* Express */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <SiExpress className="skillIcon" style={{ color: "black" }} />
          <h4 className="skillTitle">Express JS</h4>
        </div>

        {/* MongoDB */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <BiLogoMongodb className="skillIcon" style={{ color: "green" }} />
          <h4 className="skillTitle">MongoDB</h4>
        </div>

        {/* SQL */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <BsFiletypeSql className="skillIcon" style={{ color: "pink" }} />
          <h4 className="skillTitle">SQL</h4>
        </div>

        {/* GitHub */}
        <div className="skillItem card d-flex flex-row align-items-center">
          <IoLogoGithub className="skillIcon" style={{ color: "black" }} />
          <h4 className="skillTitle">GitHub</h4>
        </div>
      </div>
    </div>
  );
}

export default SkillBox;

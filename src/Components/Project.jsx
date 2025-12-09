import "./Project.css";
import { BsArrowUpRight } from "react-icons/bs";
import projectList from "./ProjectData.js";

function Project() {
  return (
    <div className="project-container">
      <h2 className="project-title">My Projects</h2>

      <div className="projects-wrapper">
        {projectList.map((project) => (
          <div className="project-card" key={project.sno}>
            <h3 className="project-number">Project {project.sno}</h3>
            <div className="projectBox">
              <div className="imageDiv">
                <img
                  src={project.image}
                  className="project-image"
                  alt="Project Preview"
                />
              </div>

              <div className="project-body projectDiv">
                <h4 className="project-heading">{project.title}</h4>

                <ul className="project-description">
                  {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="project-buttons">
                  <a
                    href={project.link}
                    className="btn btn-primary project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <BsArrowUpRight />
                  </a>

                  <a
                    href={project.video}
                    className="btn btn-outline-dark project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

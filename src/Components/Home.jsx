import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

function Home() {
  return (
    <div className="d-flex flex-wrap justify-content-around homeBox">
      <div className="card text-dark bg-light mb-1 fs-5 fs-xs-1 p-1 home-card">
        <div className="card-body">
          <h5 className="card-title">Hi, I’m Samarth Malhotra</h5>
          <p className="card-text">
            A passionate{" "}
            <span className="text-primary">MERN Stack Developer</span> and{" "}
            <span className="text-primary">BCA (IT)</span> student. I have a
            strong understanding of web technologies like{" "}
            <span className="text-primary">
              React, Node.js, Express, and MongoDB.
            </span>
            <br /> I’m a creative thinker who loves exploring new ideas and
            building innovative web solutions. Passionate about continuous
            learning and staying updated with emerging technologies.
          </p>
        </div>
      </div>

      <div className="responsiveImage mt-4">
        <img
          src="https://res.cloudinary.com/duryxhwcp/image/upload/v1761501603/Picture_1_3_po2d4f.png"
          alt="Candidate Image"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default Home;

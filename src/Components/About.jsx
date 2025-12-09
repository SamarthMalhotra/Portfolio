import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutBox">
        <h2 className="about">ABOUT</h2>
        <div className="d-flex flex-wrap justify-content-around aboutflex">
          <div className="card text-dark bg-light p-1 about-card">
            <div className="card-body">
              <h5 className="card-title">Hi, I’m Samarth Malhotra</h5>
              <p className="card-text">
                I am a cheerful and optimistic person. I have the ability to
                adjust with all kinds of people. I am an extrovert and can
                express my views effectively before anyone. I always learn from
                my mistakes and never repeat them. I am also phlegmatic.
              </p>
            </div>
          </div>

          <div className="responsiveAboutImage mt-3">
            <img
              src="https://res.cloudinary.com/duryxhwcp/image/upload/v1761501603/Picture_1_3_po2d4f.png"
              alt="Candidate Image"
              className="img-fluid aboutImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

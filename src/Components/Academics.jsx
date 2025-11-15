import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Academics.css";
import academic from "./AcademicsData";

function Academics() {
  return (
    <div className="academicsDiv w-100 p-3">
      <h2 className="text-center mb-4 mt-lg-5">
        <span className="header">ACADEMICS</span>
      </h2>

      <div className="d-flex flex-column align-items-center gap-4">
        {academic.map((data, index) => (
          <div className="card academic-card shadow-sm w-100" key={index}>
            <div className="card-body">
              <h5 className="card-title fw-bold">{data.title}</h5>

              <p className="card-text mt-2">
                <b>Institution:</b> {data.institute}
                <br />
                <b>Year:</b> {data.year}
                <br />
                <b>{data.percentage}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;

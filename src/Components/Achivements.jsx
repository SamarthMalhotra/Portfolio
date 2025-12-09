import "./Achivements.css";

const Achivements = () => {
  return (
    <>
      <div className="mainBox">
        <h2 className="heading">
          <center>Achivements</center>
        </h2>
        <div className="achievements-container">
          <div
            id="myCarousel"
            className="carousel slide achievements-carousel"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-image-wrapper">
                  <img
                    src="https://res.cloudinary.com/duryxhwcp/image/upload/v1765273473/Achivement3_odnrgd.jpg"
                    alt="slide1"
                  />
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-image-wrapper">
                  <img
                    src="https://res.cloudinary.com/duryxhwcp/image/upload/v1765273473/Achivement2_sbxbz4.jpg"
                    alt="slide2"
                  />
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-image-wrapper">
                  <img
                    src="https://res.cloudinary.com/duryxhwcp/image/upload/v1765273552/Achivement1_e4u51v.jpg"
                    alt="slide3"
                  />
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivements;

import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "bootstrap/js/dist/carousel"; // ✅ correct import
import "./Achivements.css";

const Achivements = () => {
  const carouselRef = useRef(null);

  const data = [
    {
      img: "https://res.cloudinary.com/duryxhwcp/image/upload/v1765305170/Achivement2_nubas9.jpg",
      title: "Achievement 1",
    },
    {
      img: "https://res.cloudinary.com/duryxhwcp/image/upload/v1765304519/Achivement3_jdnix3.jpg",
      title: "Achievement 2",
    },
    {
      img: "https://res.cloudinary.com/duryxhwcp/image/upload/v1765303774/Achivement1_cgakc8.jpg",
      title: "Achievement 3",
    },
    {
      img: "https://res.cloudinary.com/duryxhwcp/image/upload/v1774106041/Screenshot_2026-03-21_204324_sk9lxe.png",
      title: "Achievement 4",
    },
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = new Carousel(carouselRef.current, {
      interval: 2500,
      ride: "carousel",
    });

    const el = carouselRef.current;

    const handleMouseEnter = () => carousel.pause();
    const handleMouseLeave = () => carousel.cycle();

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    // cleanup
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      carousel.dispose(); // ✅ prevent memory leak
    };
  }, []);

  return (
    <div className="mainBox">
      <h2 className="heading text-center">🏆 Achievements</h2>

      <div className="achievements-container mt-5">
        <div
          id="myCarousel"
          ref={carouselRef}
          className="carousel slide carousel-fade achievements-carousel"
        >
          {/* ✅ indicators */}
          <div className="carousel-indicators">
            {data.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></button>
            ))}
          </div>

          {/* ✅ slides */}
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="card-wrapper">
                  <img src={item.img} alt="slide" />

                  <div className="overlay">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ controls */}
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
  );
};

export default Achivements;

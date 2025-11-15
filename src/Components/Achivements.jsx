import { Carousel } from "react-bootstrap";
import "./Achivements.css";

const Achivements = () => {
  return (
    <div className="carouselWrapper mb-2">
      <h2 className="m-lg-4">
        <center>Achivements</center>
      </h2>
      <Carousel fade interval={7000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block carouselImg"
            src="https://res.cloudinary.com/duryxhwcp/image/upload/v1763145276/ECertificate_y2ylyn.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block carouselImg"
            src="https://res.cloudinary.com/duryxhwcp/image/upload/v1763145707/PCertificate_yhdztm.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block carouselImg"
            src="https://res.cloudinary.com/duryxhwcp/image/upload/v1763145735/D_Certificate_tipg8v.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Achivements;

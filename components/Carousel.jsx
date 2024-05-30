import { IMAGES } from "@/constants";
import Image from "next/image";
import './CarouselStyles.css'

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="slider">
        {IMAGES.map((image, index) => (
          <div className="slide" key={index}>
            <div className="overlay_container">
              <Image src={image.image} alt={`Slide ${index}`} width={500} height={400} />
              <div className="overlay">
                <div className="overlay_text">{image.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

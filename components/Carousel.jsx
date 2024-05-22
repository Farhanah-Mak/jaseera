import { IMAGES } from "@/constants";
import Image from "next/image";
import './CarouselStyles.css'

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="slider">
        {IMAGES.map((src, index) => (
            <div className="slide" key={index}>
            <Image src={src} alt={`Slide ${index}`} width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

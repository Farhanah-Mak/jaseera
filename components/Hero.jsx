import "./HeroStyles.css"
import Image from "next/image"
import Link from "next/link";
import { aldrich, alfa_slab_one } from "@/app/fonts";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero_container">
        <div className="hero_left">
          <h1 className={`${alfa_slab_one.className} + hero_title`}>
            Jaseera Engineering
          </h1>
          <h2 className={`${aldrich.className} + hero_subtitle`}>
            Innovative Engineering solutions
          </h2>
          <p className="hero_text">
            Experience the power of precision engineering and surveying
            solutions that drive industrial success. With our commitment to
            precision, efficiency, and innovation, we help you navigate the path
            to excellence, shaping the future of your industry.
          </p>
          <Link href="/about">
            <Button title="Read more" styles="hero_button" />
          </Link>
        </div>
        <div className="hero_right">
          <Image src="" width={400} height={400} className="hero_image" />
        </div>
      </section>
    </div>
  );
}

export default Hero
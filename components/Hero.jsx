'use client'
import "./HeroStyles.css"
import Image from "next/image"
import Link from "next/link";
import { aldrich, alfa_slab_one } from "@/app/fonts";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
     gsap.to(".hero_title", { opacity: 1, delay: .5 });
     gsap.to(".hero_video", { opacity: 1, y: -20 , delay: .5 });
  }, []);
 
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
          <video
            className="hero_video"
            autoPlay={true}
            muted
            playsInline={true}
            loop
            width={window.innerWidth < 760 ? 400 : 500}
            height={window.innerWidth < 760 ? 400 : 500}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}

export default Hero
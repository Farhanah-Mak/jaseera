'use client'
import "./HeroStyles.css"
import Link from "next/link";
import { aldrich, alfa_slab_one } from "@/app/fonts";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ThreeD from "./ThreeD";
import StarCanvas from "./StarCanvas";

// import Blob from "./Blob";

const Hero = () => {
  const container = useRef();
  useGSAP(() => {
     gsap.to(".hero_title", {
       opacity: 1,
       delay: 0.3,
       y: -20,
       ease: "power1.out",
     });
     gsap.to(".hero_subtitle", {
       opacity: 1,
       delay: 0.5,
       y: -20,
       ease: "power1.out",
     });
     gsap.to(".hero_video", {
       opacity: 1,
       y: -20,
       delay: 0.5,
       ease: "power1.out",
     });
     gsap.to(".hero_text", {
       opacity: 1,
       delay: 0.7,
       y: -20,
       ease: "power1.out",
     });
  }, []);
 
  return (
    <div className="hero">
      <section className="hero_container">
        <StarCanvas />
        <div className="hero_left">
          {/* <Blob /> */}
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
            <Button title="Read More" type="button" styles="hero_button" data="Read More"/>
          </Link>
        </div>
        <div className="hero_right">
          <ThreeD />
          {/* <SplineComponent/> */}
          {/* <Video3D videoUrl="/video.mp4" width={10} height={5} /> */}
          {/* <video
            className="hero_video"
            autoPlay={true}
            muted
            playsInline={true}
            loop
            // width={window.innerWidth < 760 ? 400 : 500}
            // height={window.innerWidth < 760 ? 400 : 500}
            width={500}
            height={500}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </section>
    </div>
  );
}

export default Hero



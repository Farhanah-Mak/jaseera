'use client'
import "./AboutStyles.css";
import { aldrich } from "@/app/fonts";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import StarCanvas from "./StarCanvas";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.from(".about_title", {
      opacity: 0,
      y: 50,
      duration: .1,
      scrollTrigger: {
        trigger: ".about_title",
        start: "top 80%",
        end: "top 20%",
        ease: "power1.out",
        scrub: true,
        markers: false,
      },
    });
    gsap.from(".about_text", {
      opacity: 0,
      x: -50,
      duration: .1,
      scrollTrigger: {
        trigger: ".about_text",
        start: "top 80%",
        end: "top 20%",
        ease: "power1.out",
        scrub: true,
        markers: false,
      },
    });
    gsap.from(".about_icon", {
      opacity: 0,
      y: 50,
      duration: .1,
      scrollTrigger: {
        trigger: ".about_icon",
        start: "top 80%",
        end: "top 20%",
        ease: 'power1.out',
        scrub: true,
        markers: false,
      },
    });
    // const elements = sectionRef.current.querySelectorAll(".animate");
    // elements.forEach((element) => {
    //   gsap.from(element, {
    //     opacity: 0,
    //     y: 50, 
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: element,
    //       start: "top 80%",
    //       end: "top 20%",
    //       scrub: true,
    //       markers: false,
    //     }
    //   })
    // })
  },{ scope: sectionRef });
    return (
      <div className="about">
        <section className="about_container" ref={sectionRef}>
          <StarCanvas />
          <h1 className={`${aldrich.className} + about_title`}>
            Our Core Values
          </h1>
          <div className="about_left">
            <p className="about_text one">
              Our team collaborates closely with clients to understand their
              vision and requirements, working together to create accurate and
              detailed 3D models.
            </p>
            <p className="about_text two">
              We prioritize precision and accuracy in our surveying and
              engineering services. Our experienced professionals employ
              state-of-the-art equipment and methodologies to deliver reliable
              data and robust engineering solutions, adhering to the highest
              quality standards.
            </p>
          </div>
          <div className="about_right">
            <div>
              <div className="about_circle">
                <Image
                  className="teamwork animate"
                  src="/teamwork.svg"
                  width={55}
                  height={100}
                  alt="teamwork"
                />
              </div>
              <p className={`${aldrich.className} + about_icon`}>Teamwork</p>
            </div>

            <div>
              <div className="about_circle">
                <Image
                  className="quality animate"
                  src="/quality.svg"
                  width={55}
                  height={100}
                  alt="quality"
                />
              </div>
              <p className={`${aldrich.className} + about_icon`}>Quality</p>
            </div>
            <div>
              <div className="about_circle">
                <Image
                  className="focus animate"
                  src="/focus.svg"
                  width={60}
                  height={100}
                  alt="customer_focus"
                />
              </div>
              <p className={`${aldrich.className} + about_icon`}>
                Customer Focus
              </p>
            </div>
            <div>
              <div className="about_circle">
                <Image
                  className="innovation animate"
                  src="/innovation.svg"
                  width={50}
                  height={100}
                  alt="innovation"
                />
              </div>
              <p className={`${aldrich.className} + about_icon`}>Innovation</p>
            </div>
            <div>
              <div className="about_circle">
                <Image
                  className="professionlism animate"
                  src="/professionlism.svg"
                  width={50}
                  height={100}
                  alt="professionlism"
                />
              </div>
              <p className={`${aldrich.className} + about_icon`}>
                Professionlism
              </p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default About;

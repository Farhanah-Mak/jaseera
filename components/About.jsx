import "./AboutStyles.css";
import { aldrich } from "@/app/fonts";
import Image from "next/image";

const About = () => {
    return (
      <div className="about">
        <section className="about_container">
          <h1 className={`${aldrich.className} + about_title`}>
            Our Core Values
          </h1>
          <div className="about_left">
            <p className="about_text one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem maxime quia numquam vitae! Tenetur in temporibus
              provident quasi vel voluptates?
            </p>
            <p className="about_text two">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              cumque magni officia dignissimos perspiciatis itaque voluptatem
              quibusdam numquam ad in!
            </p>
          </div>
          <div className="about_right">
            <div>
              <div className="about_circle">
                <Image
                  className="teamwork"
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
                  className="quality"
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
                  className="focus"
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
                  className="innovation"
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
                  className="professionlism"
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

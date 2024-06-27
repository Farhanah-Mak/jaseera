import "./ServicesStyles.css"
import { aldrich } from "@/app/fonts";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Services = () => {
  return (
    <div className="services">
      {/* <div className="overlay"></div> */}
      <section className="services_container">
        <h2 className={`${aldrich.className} + services_title`}>
          Our Services
        </h2>
        <div className="services_left">
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>
              3D Laser Scanning
            </p>
            <Link href="services/3D-laser-scanning">
              <Image
                src="/services-icon.svg"
                width={30}
                height={30}
                className="service_icon"
              />
            </Link>
          </div>
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>Digital Twin </p>
            <Link href="services/digital-twin">
              <Image
                src="/services-icon.svg"
                width={30}
                height={30}
                className="service_icon"
              />
            </Link>

            {/* </span> */}
          </div>
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>3D Modelling</p>
            <Link href="services/3D-Modelling">
              <Image
                src="/services-icon.svg"
                width={30}
                height={30}
                className="service_icon"
              />
            </Link>
          </div>
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>
              Topographical Survey
            </p>
            <Link
              href="services/topographical-survey"
              className="services_link"
            >
              <Image
                src="/services-icon.svg"
                width={30}
                height={30}
                className="service_icon"
              />
            </Link>
          </div>
        </div>
        <div className="services_right">
          <p className="services_right_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            blanditiis sequi maiores illum reiciendis velit suscipit impedit,
            rerum sapiente ex placeat! Perferendis saepe cumque dolor sed iste
            soluta voluptates exercitationem.
          </p>
          <br />
          <p className="services_right_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate totam soluta alias quibusdam nostrum a quod dignissimos
            placeat quas ducimus laboriosam, vel, quam et error, iusto nemo
            corporis consequuntur?
          </p>
          <Link href="/services">
            <Button title="Learn More" styles="services_button" data="Learn More"/>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services
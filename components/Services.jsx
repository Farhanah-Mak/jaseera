import "./ServicesStyles.css"
import { aldrich } from "@/app/fonts";
import Image from "next/image";

const Services = () => {
  return (
    <div className="services">
      <section className="services_container">
        <h2 className={`${aldrich.className} + services_title`}>
          Our Services
        </h2>
        <div className="services_left">
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>
              3D Laser Scanning
            </p>
            <Image
              src="/services-icon.svg"
              width={30}
              height={30}
              className=".service_icon"
            />
          </div>
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>Digital Twin </p>
            <Image
              src="/services-icon.svg"
              width={30}
              height={30}
              className=".service_icon"
            />
            {/* </span> */}
          </div>
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>3D Modelling</p>
            <Image
              src="/services-icon.svg"
              width={30}
              height={30}
              className=".service_icon"
            />
          </div>
          <div className="service_wrapper">
            <p className={`${aldrich.className} + service`}>
              Topographical Survey
            </p>
            <Image
              src="/services-icon.svg"
              width={30}
              height={30}
              className=".service_icon"
            />
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
          <button className="button services_button">Learn more</button>
        </div>
      </section>
    </div>
  );
}

export default Services
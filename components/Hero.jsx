import "./HeroStyles.css"
import Image from "next/image"
import { aldrich, alfa_slab_one } from "@/app/fonts";

const Hero = () => {
  return (
      <div className="hero">
          <section className="hero_container">
              <div className="hero_left">
                  <h1 className={`${alfa_slab_one.className} + hero_title`}>Jaseera Engineering
                  </h1>
                  <h2 className={`${aldrich.className} + hero_subtitle`}>Innovative Engineering solutions</h2>
                  <p className="hero_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi earum officia neque alias, vel reprehenderit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, culpa!</p>
                  <button className=" button hero_button">Learn more</button>
              </div>
              <div className="hero_right">
                  <Image src="/hero_image.png" width={400} height={400} className="hero_image" />
              </div>
          </section>
      </div>
  )
}

export default Hero
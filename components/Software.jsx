'use client'
import "./SoftwareStyles.css"
import Image from "next/image"
import { aldrich } from "@/app/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect} from "react";

const Software = () => {
  const marqueeRef = useRef(null);
  useEffect(() => {
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2;
    const items = marquee.children;
    //Duplicate the items to create a  seamless effect
    Array.from(items).forEach(item => {
      marquee.appendChild(item.cloneNode(true));
    })
    gsap.fromTo(marquee, { x: 0 },
      {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      }
    );
  }, [])

  return (
    <div className="software">
      <section className="software_container">
        <h1 className={`${aldrich.className} + software_title`}>Softwares</h1>
        <div className="software_logo_wrapper" ref={marqueeRef}>
          <Image src="/software1.png" height={58} width={192} alt="logo" className="software_logo"/>
          <Image src="/software2.png" height={90} width={207} alt="logo" />
          <Image src="/software3.png" height={35} width={228} alt="logo" />
          <Image src="/software4.png" height={26} width={220} alt="logo" />
        </div>
      </section>
    </div>
  );
}

export default Software


 

 
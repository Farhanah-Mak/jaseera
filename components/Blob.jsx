'use client'
import "./BlobStyles.css"
import { useEffect } from "react";
import { gsap } from "gsap";

const Blob = () => {
    useEffect(() => {
      gsap.to("#blob1", {
        duration: 3,
        y: 40,
        x: 20,
        rotation: -30,
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: "power4.inOut",
      });
      gsap.to("#blob2", {
        duration: 3,
        y: 60,
        x: 50,
        rotation: 20,
        scale: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, []);

  return (
      <div className='blob_container'>
          <div className='blob' id="blob1"></div>
          <div className='blob'id="blob2"></div>
      </div>
  )
}

export default Blob

  

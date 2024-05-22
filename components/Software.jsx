import "./SoftwareStyles.css"
import Image from "next/image"
import { aldrich } from "@/app/fonts";

const Software = () => {
  return (
    <div className="software">
      <section className="software_container">
        <h1 className={`${aldrich.className} + software_title`}>Softwares</h1>
        <div className="software_logo_wrapper">
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
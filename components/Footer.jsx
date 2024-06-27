import "./FooterStyles.css"
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <Link href="/">
          <Image
            src="/jaseera_logo.png"
            width={140}
            height={55}
            alt="logo"
            className="footer_logo"
          />
        </Link>

        <div className="footer_column">
          <p className="footer_text">
            Would you like to talk about your future product
          </p>
          {/* <button className="footer_button" type="button">
            Get in touch
          </button> */}
          <Link href="/contact">
            <Button
              title="Get in touch"
              styles="footer_button"
              data="Get in touch"
            />
          </Link>
        </div>
        <ul className="footerlists">
          {NAV_LINKS.map((link) => (
            <Link className="footerlist" href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="line"></div>

        <div className="address">
          <p>
            {" "}
            <Image src="/location.svg" width={12} height={12} />
            Dammam, Saudi Arabia
          </p>
          <p>
            {" "}
            <Image src="/phone.svg" width={12} height={12} />
            +966 591698112
          </p>
          <p>
            {" "}
            <Image src="/mail.svg" width={12} height={12} />
            jaseeraengg@gmail.com
          </p>
        </div>

        <div className="line"></div>

        <ul className="socials_list">
          <Link href="https://x.com/eecc_KSA/" target="_blank">
            <Image
              src="/twitter.svg"
              alt="logo"
              width={24}
              height={24}
              className="social_image"
            />
          </Link>
          <Link
            href="https://www.facebook.com/share/p/1foHWsLrBT5TxBU2/"
            target="_blank"
          >
            <Image
              src="/facebook.svg"
              alt="logo"
              width={24}
              height={24}
              className="social_image"
            />
          </Link>
          <Link href="https://www.instagram.com/eecc_ksa/" target="_blank">
            <Image
              src="/instagram.svg"
              alt="logo"
              width={24}
              height={24}
              className="social_image"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/feed/update/urn:li:share:7210978918412025856/"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="logo"
              width={24}
              height={24}
              className="social_image"
            />
          </Link>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
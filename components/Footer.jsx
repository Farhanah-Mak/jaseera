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
            <Button title="Get in touch" styles="footer_button" />
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
          <p>Dammam, Saudi Arabia</p>
          <p>+966 591698112</p>
          <p>jaseeraengineering@gmail.com</p>
        </div>

        <div className="line"></div>

        <ul className="socials_list">
          <Link href="/">
            <Image src="/twitter.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src="/facebook.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src="/instagram.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src="/linkedin.svg" alt="logo" width={24} height={24} />
          </Link>
        </ul>

        {/* <ul className="social_icons">
          {SOCIALS.links.map((link) => {
            <Link href='/' key={link}>
                <Image src={link} alt="logo" width={24} height={24} />
              </Link>
            })}
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer
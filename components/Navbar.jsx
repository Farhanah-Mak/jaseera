'use client';
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import "./NavbarStyles.css"
import Button from "./Button";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false)

  function toggleSideBar() {
    setIsOpen(!isOpen)
  }
  function closeSideBar() {
    setIsOpen(false)
  }

  function getLogoSize(){
    if (width <= 576) return 90;
    if (width <= 768) return 100;
    if (width <= 992) return 130;
    if (width <= 1200) return 140;
    return 150;
  };

  
  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link href="/">
          <Image
            src="/jaseera_logo.png"
            width={getLogoSize()}
            height={getLogoSize() / 2}
            alt="logo"
            className="nav_logo"
          />
        </Link>
        <ul className={`navlists ${isOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              className="navlist on-hover"
              data-text={link.label}
              href={link.href}
              key={link.key}
              onClick={closeSideBar}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div>
          <Link href="/contact" className="contact_link">
            {" "}
            <Button title="Contact Us" data="Contact Us" styles="navbutton"/>
          </Link>
          <Image
            as="button"
            src={`${isOpen ? "/close.svg" : "/hamburger.svg"}`}
            alt="menu"
            width={30}
            height={30}
            onClick={toggleSideBar}
            className="nav_toggle_button"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar

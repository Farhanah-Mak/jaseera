'use client'
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import "./NavbarStyles.css"
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar]= useState(false)
  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link href="/">
          <Image src="/jaseera_logo.png" width={100} height={60} alt="logo" className="nav_logo"/>
        </Link>
        <ul className="navlists">
          {NAV_LINKS.map((link) => (
            <Link className="navlist" href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div>
          <button className="button navbutton">Contact us</button>
          <button
            className="toggle_button"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image src="/close.svg" alt="menu_close" width={30} height={30} />
            ) : (
              <Image src="/hamburger.svg" alt="menu_open" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
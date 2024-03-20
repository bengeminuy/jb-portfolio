"use client";

import Image from "next/image";
import Logo from "../../public/images/logo_dark.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "../../styles/menu.css";
import "../../styles/hamburger_button.css";
import "../../styles/close_button.css";

export default function NavBar() {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/work", label: "Work" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const container = useRef<any>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<any>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full max-w-screen-2xl" ref={container}>
      <div className="flex justify-between items-center h-26 p-4 pr-8 pl-8">
        <Image src={Logo} alt=".JB Logo" className="h-20 w-20 p-3" />
        <div className="z-10 cursor-pointer">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div>
      </div>

      <div className="menu-overlay">
        <div className="w-full max-w-screen-2xl ">
          <div className="flex justify-between items-center h-26 p-4 pr-8 pl-8">
            <Image src={Logo} alt=".JB Logo" className="h-20 w-20 p-3" />
            <div className="z-10 cursor-pointer">
              <div className="close-container" onClick={toggleMenu}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-4 pl-40 2xl:pt-24 xl:pt-8">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link className="menu-link" href={link.path}>
                    {" / " + link.label}
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

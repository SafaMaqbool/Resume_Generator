import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <header className="px-[100px] py-2 flex justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <nav className="hidden md:flex gap-8 items-center">
        <Link href="/home">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Button variant="outline">Log In</Button>
       <Button><Link href="/register">Register</Link></Button>
      </nav>

      <div className="md:hidden ">
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Nav;

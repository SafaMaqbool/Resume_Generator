import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="px-[100px] py-2 flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" />
      </div>

      <div className="hidden md:flex gap-8 items-center">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <Button variant="outline">
          <Link href={"/login"}>Log In</Link>
        </Button>
        <Button>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>

      <div className="md:hidden ">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Nav;

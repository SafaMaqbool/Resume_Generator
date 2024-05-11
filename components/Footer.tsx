import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/logo.svg";
import fb from "@/public/assets/fb.svg";
import linkedin from "@/public/assets/linkendin.svg";
import insta from "@/public/assets/insta.svg";
import twitter from "@/public/assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="py-32 px-16">
      <div className="flex gap-52">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex flex-col">
          <Link href="/about">About & FAQS </Link>
          <Link href="/profile">PROFILE</Link>
          <Link href="/reports">REPORTS</Link>
          <Link href="/insights">INSIGHTS</Link>
        </div>

        <div className="flex flex-row">
          <Image src={fb} alt="" />
          <Image src={linkedin} alt="" />
          <Image src={twitter} alt="" />
          <Image src={insta} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

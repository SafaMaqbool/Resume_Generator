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
    <footer className="py-28 px-32 text-brand-primary grid grid-cols-4 gap-2">
      <Image src={logo} alt="logo" />

      <div className="flex flex-col">
        <Link href="/about">About & FAQS </Link>
        <Link href="/profile">PROFILE</Link>
        <Link href="/reports">REPORTS</Link>
        <Link href="/insights">INSIGHTS</Link>
      </div>

      <div className="flex flex-col">
        <Link href="/about">Information Center </Link>
        <Link href="/profile">Terms and Conditions</Link>
        <Link href="/reports">Privacy Policy</Link>
      </div>

      <div className="flex gap-8 items-center">
        <Image src={fb} alt="" />
        <Image src={linkedin} alt="" />
        <Image src={twitter} alt="" />
        <Image src={insta} alt="" />
      </div>
    </footer>
  );
};

export default Footer;

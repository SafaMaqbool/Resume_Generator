import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";
import { Partners } from "../components/Partners";
import Templates from "@/components/Templates";
import Features from "@/components/Features";
import Working from "@/components/Working";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Partners/>
      <Templates/>
      <Features/>
      <Working/>
      <Footer/>
    </main>
  );
}

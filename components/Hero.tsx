import React from "react";
import hero from "@/public/assets/HeroImg.svg";
import Image from "next/image";
import line from "@/public/assets/line.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="px-[100px] py-[120px] flex flex-col-reverse  lg:items-center lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center lg:w-1/2">
        <div className="flex flex-col max-w-[550px]">
          <p className="font-semibold text-[35px]  text-center lg:text-[50px] lg:text-left">
            Only 2% of resumes make it past the first round. Be in the top 2%.
          </p>
          <Image className="py-4 lg:w-[500px]" src={line} alt="line" />
          <p className="py-2 mb-4 text-[20px] font-medium">
            Create a new resume, or improve an existing one in minutes.
          </p>
          <div className="flex gap-12">
            <Button>Create Resume</Button>
            <Button>Upgrade Resume</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center lg:w-1/2">
        <Image src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;

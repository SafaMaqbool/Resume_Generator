import Image from "next/image";
import React from "react";
import ats from "@/public/assets/ats.svg";
import job from "@/public/assets/jobsucess.svg";
import client from "@/public/assets/clientsatisfaction.svg";
import approved from "@/public/assets/professionallyApproved.svg";

const Features = () => {
  return (
    <div className="px-[100px] ">
      <div className="flex justify-center items-center">
        <p className="text-[#191A15] text-[50px] font-bold text-center">
          Easiest & most feature packed <br /> resume builder available
        </p>
      </div>

      <div className="grid grid-cols-4 mt-16 justify-items-center ">
        <div className="flex flex-col justify-center items-center">
          <Image src={ats} alt="" />
          <p>ATS Friendly Resume Builder</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={job} alt="" />
          <p>Job Success</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={client} alt="" />
          <p>Client Satisfaction</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={approved} alt="" />
          <p>Professionally approved templates</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

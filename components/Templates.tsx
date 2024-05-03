import Image from "next/image";
import React from "react";
import cvTemplate from "@/public/assets/cvTemplate.svg";

const Templates = () => {
  return (
    <div className="flex flex-col py-[70px]">
      <div className="justify-center items-center">
        <p className="text-[#191A15] text-center text-[50px] font-bold">
          Templates to win recruiters over
        </p>
      </div>

      <div className="bg-[#DFEEFA] flex justify-center items-center mt-4 py-10">
        <div>
          <Image src={cvTemplate} alt="template" />
        </div>
      </div>
    </div>
  );
};

export default Templates;

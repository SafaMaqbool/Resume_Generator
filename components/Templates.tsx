import Image from "next/image";
import React from "react";
import cvTemplate from '../../project/public/assets/cvTemplate.svg'

const Templates = () => {
  return (
    <div className="flex flex-col px-[214px] py-[70px]">
      <div className="justify-center items-center">
        <p className="text-[#191A15] text-center text-[50px] font-bold">
          Templates to win recruiters over
        </p>
      </div>

      <div className="bg-[#DFEEFA] w-full flex">
        <div className="justify-center items-center">
            <Image src={cvTemplate} alt="template"/>
        </div>
        

      </div>
    </div>
  );
};

export default Templates;

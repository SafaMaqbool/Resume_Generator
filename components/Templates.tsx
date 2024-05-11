import Image from "next/image";
import React from "react";
import cvTemplate from "@/public/assets/cvTemplate.svg";

const Templates = () => {
  return (
    <section className="w-full">
      <div className="bg-[#f9fcff]">
        <p className="text-brand-primary py-16 text-center text-[50px] font-bold">
          Templates to win recruiters over
        </p>
      </div>

      <div className="bg-brand-blue py-20 w-full flex items-center justify-center">
        <div className="justify-center items-center">
          <Image src={cvTemplate} alt="template" />
        </div>
      </div>
    </section>
  );
};

export default Templates;

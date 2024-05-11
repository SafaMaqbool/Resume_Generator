import Image from "next/image";
import React from "react";
import google from "@/public/assets/google.svg";
import trello from "@/public/assets/trello.svg";
import monday from "@/public/assets/monday.svg";
import notion from "@/public/assets/notion.svg";
import slack from "@/public/assets/slack.svg";

export const Partners = () => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-center items-center flex-col">
        <p className="text-[#191A15] text-[36px] font-semibold">Our Clients</p>
        <p className="text-[#191A15] text-[16px] font-normal mb-[50px]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="grid grid-cols-5 ">
        <div>
          <Image src={google} alt="google" />
        </div>
        <div>
          <Image src={trello} alt="google" />
        </div>
        <div>
          <Image src={monday} alt="google" />
        </div>
        <div>
          <Image src={notion} alt="google" />
        </div>
        <div>
          <Image src={slack} alt="google" />
        </div>
      </div>
    </div>
  );
};

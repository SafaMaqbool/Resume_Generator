import Image from "next/image";
import React from "react";
import google from "@/public/assets/google.svg";
import trello from "@/public/assets/trello.svg";
import monday from "@/public/assets/monday.svg";
import notion from "@/public/assets/notion.svg";
import slack from "@/public/assets/slack.svg";

const logos = [
  {
    src: google,
    alt: "google",
  },
  {
    src: trello,
    alt: "trello",
  },
  {
    src: monday,
    alt: "monday",
  },
  {
    src: notion,
    alt: "notion",
  },
  {
    src: slack,
    alt: "slack",
  },
];

export const Partners = () => {
  return (
    <div className="w-full px-24 py-16">
      <div className="flex justify-center text-brand-primary   items-center flex-col">
        <p className="text-4xl font-semibold">Our Clients</p>
        <p className="mb-10 mt-9">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="grid grid-cols-5 ">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

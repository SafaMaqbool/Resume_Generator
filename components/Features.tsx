import Image from "next/image";
import React from "react";
import ats from "@/public/assets/ats.svg";
import job from "@/public/assets/jobsucess.svg";
import client from "@/public/assets/clientsatisfaction.svg";
import approved from "@/public/assets/professionallyApproved.svg";

const feats = [
  {
    image: ats,
    label: "ATS Friendly Resume Builder",
    text: "Ensure your resume gets noticed by Applicant Tracking Systems (ATS) with our ATS-friendly formatting. Our platform optimizes your resume to increase its chances of passing through initial screenings.",
  },
  {
    image: job,
    label: "Job Success",
    text: "Set yourself up for success in your job search journey. Our platform equips you with the tools and resources you need to create a standout resume and land your dream job.",
  },
  {
    image: client,
    label: "Client Satisfaction",
    text: "Our top priority is your satisfaction. With our user-friendly platform, ATS compatibility, and professional templates, we strive to exceed your expectations and help you succeed in your job search.",
  },
  {
    image: approved,
    label: "Professionally Approved Templates",
    text: "Our resume templates are professionally approved and designed to help you create a resume that stands out. With our easy-to-use platform, you can create a professional resume that showcases your skills and experience.",
  },
];

const Features = () => {
  return (
    <>
      <p className="text-brand-primary py-16 text-5xl font-bold text-center">
        Easiest & most feature packed <br /> resume builder available
      </p>

      <div className="bg-brand-blue py-36 px-24">
        <div className="grid grid-cols-4 gap-8 justify-items-center ">
          {feats.map((feat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Image src={feat.image} alt="" />
              <p className="mt-6">{feat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-8 mt-10 transition-transform duration-100">
          {feats.map((feat, index) => (
            <Description key={index} text={feat.text} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;

const Description = ({ text }: { text: string }) => {
  return (
    <div className="bg-blue-400 text-white h-max rounded-lg hover:rounded-[2.5rem] hover:shadow-2xl transition-all duration-200 p-6">
      <p>{text}</p>
    </div>
  );
};

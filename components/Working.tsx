import Image from "next/image";
import React from "react";
import client from "@/public/assets/workingsection.svg"

const box=[
  {
    label:'Choose Your Template',
    text: "Browse our collection of templates and select the one that best fits your style and industry."
  },
  {
    label: 'Enter Your Information',
    text:'Fill in your personal details, work experience, education, and skills using our easy-to-use interface.'
  },
  {
    label:'Customize and Edit',
    text: 'Tailor your resume to highlight your strengths and accomplishments. Customize fonts, colors, and layout to make it your own.'
  },
  {
    label:'Review and Download',
    text: 'Preview your resume to ensure everything looks perfect, then download it in your preferred format.'
  }

]

const Working = () => {
  return(
  <>
    <h1 className="text-brand-primary py-16 text-center text-[50px] font-bold ">How  buildResume Works?</h1>
    <div className="grid grid-cols-2 bg-brand-blue ">
      <div className="border flex justify-center items-center">
        <Image src={client} alt=""/>
      </div>
      <div className="flex flex-col gap-6 text-white m-4 ">
        {
          box.map((box, i) => (
            <div className="justify-center items-center rounded-lg bg-brand-darkBlue
            font-medium m-2 p-4 " key={i}>
            <h3 className="font-semibold text-[22px]">{box.label}</h3>
            <p className="">{box.text}</p>
            </div>
          ))
        }
        
      </div>

    </div>
  </>
  )
};

export default Working;

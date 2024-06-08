"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

export default function ResumeForm() {
  const [formData, setFormData] = useState({});
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      label: "Profile Information",
      Form: PersonalInfo,
    },
    {
      label: "Work Experience",
      Form: WorkExperience,
    },
    {
      label: "Projects",
      Form: Projects,
    },
  ];

  const CurrentForm = sections[activeSection].Form;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg">
        <div className="p-10">
          {/* Heading and indicators */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              {sections[activeSection].label}
            </h2>

            <div className="flex items-center">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-8 h-8 flex items-center justify-center text-xs rounded-full mr-2",
                    activeSection === index ? "bg-gray-900 " : "bg-gray-300",
                    index < activeSection && "bg-green-500"
                  )}
                >
                  <span className="text-white">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="text-sm mt-12">
            <CurrentForm
              formData={formData}
              setFormData={setFormData}
              activeStep={activeSection}
              handleBack={() => setActiveSection((prev) => prev - 1)}
              handleNext={() => setActiveSection((prev) => prev + 1)}
              steps={sections.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

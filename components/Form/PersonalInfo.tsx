import React from "react";
import { Buttons, Field, ErrorField } from "./Elements";
import { useForm } from "react-hook-form";
import { StepFormProps } from "@/types";

const PersonalInfo: React.FC<StepFormProps> = ({
  handleNext,
  setFormData,
  formData,
  activeStep,
  handleBack,
  steps,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData.personalInfo,
  });

  const onSubmit = (data: any) => {
    console.log("Personal Info invoked");
    setFormData({ ...formData, personalInfo: data });
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <Field
          id="name"
          label="Full Name"
          placeholder="Safa Khan"
          type="text"
          {...register("name", { required: "Full Name is required" })}
        />

        <ErrorField error={errors.name} />

        <Field
          id="email"
          label="Email"
          placeholder="safa@shu.edu.pk"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
        />
        <ErrorField error={errors.email} />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Field
              id="phone"
              label="Phone"
              placeholder="03XX-XXXXXXX"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^03[0-9]{2}(-|\s)?[0-9]{7}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            <ErrorField error={errors.phone} />
          </div>

          <div>
            <Field
              id="linkedin"
              label="LinkedIn"
              type="url"
              placeholder="https://linkedin.com/pk/safa"
              {...register("linkedin", {
                pattern: {
                  value: /^(https?:\/\/)?([\w\d]+\.)?linkedin.com\/.*/,
                  message: "Invalid LinkedIn URL",
                },
              })}
            />
            <ErrorField error={errors.linkedin} />
          </div>
        </div>
      </div>

      <Buttons activeStep={activeStep} steps={steps} previous={handleBack} />
    </form>
  );
};

export default PersonalInfo;

import React from "react";
import { Buttons, Field, ErrorField } from "./Elements";
import { useForm } from "react-hook-form";
import { StepFormProps } from "@/types";

const WorkExperience: React.FC<StepFormProps> = ({
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
    defaultValues: formData.workExperience,
  });

  const onSubmit = (data: any) => {
    setFormData({ ...formData, workExperience: data });
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Field
              id="companyName"
              label="Company Name"
              type="text"
              {...register("companyName", {
                required: "Company Name is required",
              })}
            />
            <ErrorField error={errors.companyName} />
          </div>

          <div>
            <Field
              id="jobTitle"
              label="Job Title"
              type="text"
              {...register("jobTitle", { required: "Job Title is required" })}
            />
            <ErrorField error={errors.jobTitle} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Field
              id="startDate"
              label="Start Date"
              type="date"
              {...register("startDate", { required: "Start Date is required" })}
            />
            <ErrorField error={errors.startDate} />
          </div>

          <div>
            <Field
              id="endDate"
              label="End Date"
              type="date"
              {...register("endDate")}
            />
            <ErrorField error={errors.endDate} />
          </div>
        </div>

        <Field
          id="description"
          label="Description"
          type="textarea"
          {...register("description")}
        />
        <ErrorField error={errors.description} />
      </div>

      <Buttons activeStep={activeStep} steps={steps} previous={handleBack} />
    </form>
  );
};

export default WorkExperience;

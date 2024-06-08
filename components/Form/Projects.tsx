import React from "react";
import { Buttons, ErrorField, Field } from "./Elements";
import { useForm } from "react-hook-form";
import { StepFormProps } from "@/types";
import { flushSync } from "react-dom";

const Projects: React.FC<StepFormProps> = ({
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
    defaultValues: formData.projects,
  });

  const onSubmit = (data: any) => {
    flushSync(() => {
      setFormData({ ...formData, projects: data });
    });

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Field
              id="projectName"
              label="Project Name"
              type="text"
              {...register("projectName", {
                required: "Project Name is required",
              })}
            />

            <ErrorField error={errors.projectName} />
          </div>

          <div>
            <Field
              id="link"
              label="Link"
              type="url"
              {...register("link", { required: "Link is required" })}
            />

            <ErrorField error={errors.link} />
          </div>
        </div>
      </div>

      <Buttons activeStep={activeStep} steps={steps} previous={handleBack} />
    </form>
  );
};

export default Projects;

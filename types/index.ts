export type StepFormProps = {
    setFormData: (data: any) => void;
    formData: any;
    activeStep: number;
    steps: number;
    handleNext: () => void;
    handleBack: () => void;
  };
  
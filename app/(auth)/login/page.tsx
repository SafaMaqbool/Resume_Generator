import { FormWrapper } from "@/components/FormWrapper";
import { LoginForm } from "@/components/loginform/LoginForm";
import React from "react";

const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <FormWrapper title="Sign In">
        <LoginForm />
      </FormWrapper>
    </main>
  );
};

export default Login;

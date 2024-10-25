import CommonForm from "@/components/common-form/form";
import { registerFormControls } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialFormState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormState);

  // HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Create new account
        </h1>
        <p className="mt-1">
          Already have an account?
          <Link
            to={"/auth/login"}
            className="font-medium ml-2 text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>

      {/* GENERATE FORM USING COMMON FORM */}
      <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign Up"}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;

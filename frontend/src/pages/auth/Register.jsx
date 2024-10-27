import CommonForm from "@/components/common-form/form";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialFormState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(registerUser(formData));

    if (data?.meta?.requestStatus === "fulfilled") {
      toast.success(data?.payload?.message || "Registration successfully.");
      navigate("/auth/login");
    } else if (data?.meta?.requestStatus === "rejected") {
      toast.error(
        data?.payload?.message || "Something went wrong, Please try again!"
      );
    }
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

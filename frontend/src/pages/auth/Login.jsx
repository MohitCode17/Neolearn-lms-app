import CommonForm from "@/components/common-form/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(loginUser(formData));

    if (data?.meta?.requestStatus === "fulfilled") {
      toast.success(data?.payload?.message || "Login success.");
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
          Good to see you again!
        </h1>
        <p className="mt-1">
          Don't have an account?
          <Link
            to={"/auth/register"}
            className="font-medium ml-2 text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>

      {/* GENERATE FORM USING COMMON FORM */}
      <CommonForm
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign In"}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;

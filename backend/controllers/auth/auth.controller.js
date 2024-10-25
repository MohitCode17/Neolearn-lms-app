import ErrorHandler from "../../middlewares/error.js";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import User from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../../config/env.config.js";

// REGISTER USER CONTROLLER
export const handleRegister = catchAsyncError(async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password)
    return next(new ErrorHandler("All fields are required", 400));

  // CHECK IF USER ALREADY EXISTS
  let user = await User.findOne({ email });

  if (user)
    return next(
      new ErrorHandler("User already registered with same email.", 400)
    );

  // CREATE A NEW USER
  user = await User.create({
    userName,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    message: "Registration successful.",
  });
});

// LOGIN USER CONTROLLER
export const handleLogin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("All fields are required", 400));

  // CHECK USER IS EXISTS OR NOT
  let user = await User.findOne({ email });

  if (!user)
    return next(new ErrorHandler("Invalid credentials, Try again!", 400));

  // CHECK USER PASSWORD
  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch)
    return next(new ErrorHandler("Invalid credentials, Try again!", 400));

  // GENERATE JWT TOKEN
  const token = jwt.sign(
    {
      id: user._id,
      userName: user.userName,
      email: user.email,
      role: user.role,
    },
    config.JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("token", token, { httpOnly: true, secure: false }).json({
    success: true,
    message: "Sign in successfully",
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
      role: user.role,
    },
  });
});

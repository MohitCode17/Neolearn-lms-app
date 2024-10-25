import ErrorHandler from "../../middlewares/error.js";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import User from "../../models/user.model.js";

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

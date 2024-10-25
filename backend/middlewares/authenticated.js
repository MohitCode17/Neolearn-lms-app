import ErrorHandler from "./error.js";
import { catchAsyncError } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";
import { config } from "../config/env.config.js";

export const checkAuthenticated = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return next(new ErrorHandler("Unauthorized user!!", 401));

  const decoded = jwt.verify(token, config.JWT_SECRET_KEY);

  req.user = decoded;

  next();
});

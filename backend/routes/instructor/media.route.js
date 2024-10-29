import express from "express";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import ErrorHandler from "../../middlewares/error.js";
import {
  deleteMediaToCloudinary,
  uploadMediaToCloudinary,
} from "../../helper/cloudinary-helper.js";

const router = express.Router();

// UPLOAD MEDIA ROUTE
router.post(
  "/upload",
  catchAsyncError(async (req, res, next) => {
    const result = await uploadMediaToCloudinary(req.file.path);
    console.log(result);

    res.status(200).json({
      success: true,
      data: result,
    });
  })
);

// DELETE MEDIA ROUTE
router.post(
  "/delete/:id",
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;

    if (!id) return next(new ErrorHandler("Asset id is required"));

    await deleteMediaToCloudinary(id);

    res.status(200).json({
      success: true,
      message: "Asset deleted successfully from cloudinary.",
    });
  })
);

export default router;

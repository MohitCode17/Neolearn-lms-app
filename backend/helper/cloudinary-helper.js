import cloudinary from "../config/cloudinary.js";

// UPLOAD TO CLOUDINARY
export const uploadMediaToCloudinary = async (file, folderName) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
      folder: folderName,
    });

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to upload media to cloudinary.");
  }
};

// DELETE FROM CLOUDINARY
export const deleteMediaToCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete media to cloudinary.");
  }
};

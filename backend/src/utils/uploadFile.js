import multer from "multer";
import { unlinkSync } from "fs";
import { v2 as cloudinary } from "cloudinary";

const uploadFile = (file) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `daraz`);
    },
    filename: function (req, file, cb) {
      let name = file.originalname.split(".").pop();
      cb(null, new Date().toISOString().replace(/:/g, "-") + "." + name);
    },
  });

  const upload = multer({ storage: storage });
  let upfile = upload.single(file);
  return upfile;
};

const uploadMultipleFile = (file, file1, file2, file3, file4, file5) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `daraz`);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });

  const upload = multer({ storage: storage });
  return upload.fields([
    { name: file, maxCount: 1 },
    { name: file1, maxCount: 1 },
    { name: file2, maxCount: 1 },
    { name: file3, maxCount: 1 },
    { name: file4, maxCount: 1 },
    { name: file5, maxCount: 1 },
  ]);
};

const uploadTocloudinary = async (localpath) => {
  let config = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    folder: "daraz",
    use_filename: true,
    unique_filename: false,
  };
  await cloudinary.uploader.upload(localpath, { ...config });
  unlinkSync(localpath);
};

export { uploadFile, uploadMultipleFile, uploadTocloudinary };

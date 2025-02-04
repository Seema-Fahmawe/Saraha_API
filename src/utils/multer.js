import multer from "multer";
import { nanoid } from "nanoid";

function fileUpload() {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = nanoid() + Date.now();
      cb(null, uniqueSuffix + "_" + file.originalname);
    },
  });

  function fileFilter(req, file, cb) {
    if (file.mimitype == "image/jpg" || file.mimitype == "image/png") {
      cb(null, true);
    } else {
      cb("invalid format", false);
    }
  }
  const upload = multer({ fileFilter, storage });
  return upload;
}

export default fileUpload;

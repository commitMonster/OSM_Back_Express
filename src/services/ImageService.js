import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

export const uploader = multer({ storage });

export const upload = async (req, res, next) => {
  const filePaths = req.files.map(file => file.path);
  res.send(filePaths);
};

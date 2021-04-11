import fs from 'fs';
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

export const deletePhoto = async (req, res, next) => {
  fs.unlink(req.body.image, err => {
    if (err) {
      res.status(400).send({ message: '이미지가 없거나 삭제에 실패했습니다.' });
    } else {
      res.send({ message: 'success' });
    }
  });
};

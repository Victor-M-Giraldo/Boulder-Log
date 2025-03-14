import multer from 'multer';

const mimetypes = ['image/jpeg', 'image/png', 'image/webp'];

function filefilter(req, file, cb) {
  if (mimetypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error('Invalid file type. Only JPEG, PNG, and WEBP are allowed.'),
      false
    );
  }
}

const storage = multer({
  storage: multer.memoryStorage(),
  fileFilter: filefilter,
});
export default storage;

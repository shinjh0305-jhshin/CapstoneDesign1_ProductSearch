const multer = require("multer");
const crypto = require("crypto");

const fileValidate = (req, file, cb) => {
  const regex = /^image\/*/;
  if (regex.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb({ errorCode: 1 }, false); //1 : 파일 확장자 오류
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../images");
    },
    filename: function (req, file, cb) {
      var mimeType;
      switch (file.mimetype) {
        case "image/jpeg":
          mimeType = "jpg";
          break;
        case "image/png":
          mimeType = "png";
          break;
        case "image/gif":
          mimeType = "gif";
          break;
        case "image/bmp":
          mimeType = "bmp";
          break;
        default:
          mimeType = "jpg";
          break;
      }
      req.tempFileName = crypto.randomBytes(6).readUIntLE(0, 6).toString(36);
      cb(null, `${req.tempFileName}.${mimeType}`);
    },
  }),
  fileFilter: fileValidate,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = { upload };

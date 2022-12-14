const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { upload } = require("./tools/multer");

const app = express();

app.use(cors());
app.use(morgan("dev"));

const doUpload = upload.array("image_upload");

app.post("/images/upload", (req, res) => {
  doUpload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, err });
    } else return res.json({ success: true, fileName: req.tempFileName });
  });
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8081, () => {
  console.log("Image server running on 8081");
});

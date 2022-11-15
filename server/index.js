require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouter = require("./routes/product");
const imageRouter = require("./routes/image");

app.use("/product", productRouter);
app.use("/image", imageRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Product database running on port ${process.env.SERVER_PORT}`);
});

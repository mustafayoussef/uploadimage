const express = require("express");
const app = express();
const bodyParser = require("body-parser").urlencoded({
  extended: false
});
const path = require("path");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/xyz", express.static(path.join(__dirname, "xyz")));
app.use(bodyParser);

const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "xyz");
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + "-" + Math.random() * 1000 + "-" + file.originalname);
  },
});
app.use(multer({
  dest: "xyz",
  storage
}).single("img"));

const IndexRouter = require("./routes/index.routes");
app.use(IndexRouter);

mongoose.connect("mongodb+srv://teka:teka@upload.a1lw6.mongodb.net/myDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running now...");
});
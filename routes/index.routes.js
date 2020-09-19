const indexModel = require("../models/index.model");
const IndexRouter = require("express").Router();

IndexRouter.get("/", async (req, res) => {
  const data = await indexModel.find();
  res.render("index", { data });
});

IndexRouter.post("/handleForm", async (req, res) => {
  await indexModel.insertMany({ title: req.body.title, imgURL: req.file.path });
  res.redirect("/");
});
module.exports = IndexRouter;

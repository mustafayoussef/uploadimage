const mongoose = require("mongoose");

const indexSchema = new mongoose.Schema({
  title: String,
  imgURL: String,
});

const indexModel = mongoose.model("product", indexSchema);

module.exports = indexModel;

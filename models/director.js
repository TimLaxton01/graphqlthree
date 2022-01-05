const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  genre: String,
  movieId: String,
});

module.exports = mongoose.model("Director", directorSchema);

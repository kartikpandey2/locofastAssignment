const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("student", student);

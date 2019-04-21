const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentClass = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: "student",
    required: true
  },
  class: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("studentClass", studentClass);

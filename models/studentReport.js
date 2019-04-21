const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentReport = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("studentReport", studentReport);

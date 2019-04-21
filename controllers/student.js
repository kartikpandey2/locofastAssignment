const studentModel = require("../models/student");

exports.getStudent = async (req, res) => {
  try {
    const id = req.query.id;
    let studentData;
    if (id) {
      studentData = await studentModel.findOne({ _id: id });
    } else {
      studentData = await studentModel.find({});
    }
    res.status(200).json({ success: true, data: studentData });
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

exports.postStudent = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ success: false, data: null });
    }
    let student = new studentModel({
      name
    });
    student = await student.save();
    res.status(200).json({ success: true, data: student });
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

const classModel = require("../models/studentClass");
const studentModel = require("../models/student");

exports.getStudentClass = async (req, res) => {
  try {
    const id = req.query.id;
    let studentClassData;
    if (id) {
      studentClassData = await classModel
        .findOne({ student_id: id })
        .populate("student_id");
    } else {
      studentClassData = await classModel.find({}).populate("student_id");
    }
    res.status(200).json({ success: true, data: studentClassData });
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

exports.postStudentClass = async (req, res) => {
  try {
    const { studentClass, student_id } = req.body;
    if (!studentClass || !student_id) {
      res.status(400).json({ success: false, data: null });
    }
    const isValidStudentId = await studentModel.findOne({ _id: student_id });
    if (!isValidStudentId) {
      res.status(400).json({ success: false, data: null });
    }
    let studentClassData = {
      student_id,
      class: studentClass
    };
    studentClassData = await classModel.findOneAndUpdate(
      { student_id },
      studentClassData,
      { upsert: true, new: true }
    );
    res.status(200).json({ success: true, data: studentClassData });
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

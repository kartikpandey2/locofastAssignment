const studentReportModel = require("../models/studentReport");
const studentClassModel = require("../models/studentClass");

exports.getStudentReport = async (req, res) => {
  try {
    const id = req.query.id;
    let studentReportData;
    if (id) {
      studentReportData = await studentReportModel.findOne({ student_id: id });
    } else {
      studentReportData = await studentReportModel.findOne({});
    }
    res.status(200).json({ success: true, data: studentReportData });
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

exports.postStudentReport = async (req, res) => {
  try {
    const student_id = req.body.student_id;
    let studentReportData;
    if (student_id) {
      const student = await studentClassModel
        .findOne({ student_id })
        .populate("student_id");

      const studentReport = new studentReportModel({
        student_id: student.student_id._id,
        class: student.class,
        name: student.student_id.name
      });
      studentReportData = studentReport.save();
    } else {
      const studentClassData = await studentClassModel
        .find({})
        .populate("student_id");
      const studentReportPromise = studentClassData.map(student => {
        const studentReport = new studentReportModel({
          student_id: student.student_id._id,
          class: student.class,
          name: student.student_id.name
        });
        return studentReport.save();
      });
      studentReportData = await Promise.all(studentReportPromise);
    }
    res.status(200).json({ success: true, data: studentReportData });
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

const Result = require("../model/User.model");

// Handle POST request to save student results
exports.saveStudentResultController = async (req, res) => {
  const studentId = req.body.studentId;

  console.log("studentId", studentId);

  try {
    const result = await Result.create({ studentId });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

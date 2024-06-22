const {
  saveStudentResultController,
} = require("../controller/user.controller");

const router = require("express").Router();

router.post("/userId", saveStudentResultController);

module.exports = router;

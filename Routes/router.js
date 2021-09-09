const express = require("express");
const studentController = require("../Controllers/studentController.js");
const router = express.Router();
router.get("/", studentController.getStudents);
router.get("/:roll", studentController.getspecStudent);
router.post("/", studentController.createstudent);
router.patch("/:roll", studentController.updatestudent);
router.delete("/:roll", studentController.deletestudent);
module.exports = router;

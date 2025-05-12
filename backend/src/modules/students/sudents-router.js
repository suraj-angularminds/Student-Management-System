const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");
const { StudentSchema, StudentStatusSchema } = require("./student-schema");
const { validateRequest } = require("../../utils");

router.get("", studentController.handleGetAllStudents);
router.post(
  "",
  validateRequest(StudentSchema),
  studentController.handleAddStudent
);
router.get("/:id", studentController.handleGetStudentDetail);
router.post(
  "/:id/status",
  validateRequest(StudentStatusSchema),
  studentController.handleStudentStatus
);
router.put(
  "/:id",
  validateRequest(StudentSchema),
  studentController.handleUpdateStudent
);

module.exports = { studentsRoutes: router };

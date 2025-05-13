const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  const query = req.query;

  const students = await getAllStudents({
    class: query.class,
    section: query.section,
    name: query.name,
    roll: query.roll,
  });

  res.status(200).send({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    systemAccess,
    phone,
    gender,
    dob,
    section,
    roll,
    fatherName,
    fatherPhone,
    motherName,
    motherPhone,
    guardianName,
    guardianPhone,
    relationOfGuardian,
    currentAddress,
    permanentAddress,
    admissionDate,
  } = req.body;
  await addNewStudent({
    name,
    email,
    systemAccess,
    phone,
    gender,
    dob,
    section,
    roll,
    fatherName,
    fatherPhone,
    motherName,
    motherPhone,
    guardianName,
    guardianPhone,
    relationOfGuardian,
    currentAddress,
    permanentAddress,
    admissionDate,
    class: req.body.class,
  });
  res.status(201).send({ message: "Student Added Successfully!" });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  await updateStudent({ userId: req.params.id, ...req.body });
  res.status(201).send({ message: "Student Updated Successfully!" });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  const student = await getStudentDetail(req.params.id);
  res.status(200).send(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  await setStudentStatus({
    userId: req.params.id,
    reviewerId: req.user.id,
    status: req.body.status,
  });
  res.status(201).send({ message: "Student Updated Successfully!" });
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};

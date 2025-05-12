const { z } = require("zod");

const StudentSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    systemAccess: z.boolean(),
    phone: z.string(),
    gender: z.string(),
    dob: z.string(),
    class: z.string(),
    section: z.string(),
    roll: z.string(),
    fatherName: z.string(),
    fatherPhone: z.string(),
    motherName: z.string(),
    motherPhone: z.string(),
    guardianName: z.string(),
    guardianPhone: z.string(),
    relationOfGuardian: z.string(),
    currentAddress: z.string(),
    permanentAddress: z.string(),
    admissionDate: z.string(),
  }),
});

const StudentStatusSchema = z.object({
  body: {
    status: z.boolean(),
  },
});

module.exports = {
  StudentSchema,
  StudentStatusSchema,
};

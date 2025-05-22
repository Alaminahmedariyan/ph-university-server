import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
    body: z.object({
    name: z.string({
        invalid_type_error: "Name must be string",
        required_error: "Name is required",
    })
})
})
const updateAcademicFacultyValidationSchema = z.object({
    body: z.object({
    name: z.string({
        invalid_type_error: "Name must be string",
        required_error: "Name is required",
    }).optional()
})
})

export const AcademicFacultyValidation = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
    };
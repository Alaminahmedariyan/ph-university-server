import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
    name: z.string({
        invalid_type_error: "Name is required",
        required_error: "Name is required",
    })
})
})
const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
    name: z.string({
        invalid_type_error: "Academic department must be string",
        required_error: "Name is required",
    }).optional(),
    academicFaculty: z.string({
        invalid_type_error: "AcademicFaculty must be string",
        required_error: "AcademicFaculty is required",
    }).optional()
})
})

export const AcademicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
    };
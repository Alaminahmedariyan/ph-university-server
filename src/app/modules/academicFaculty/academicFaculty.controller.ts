import catchAsync from "../../utils/catchAsync";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async(req, res) => {
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Academic Faculty created successfully",
        data: result,
    });
});
const getAllAcademicFaculty = catchAsync(async(req, res) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();
    res.status(200).json({
        success: true,
        message: "Academic Faculty retrieved successfully",
        data: result,
    });
});
const getSingleAcademicFaculty = catchAsync(async(req, res) => {
    const { id } = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(id);
    res.status(200).json({
        success: true,
        message: "Academic Faculty retrieved successfully",
        data: result,
    });
});
const updateAcademicFaculty = catchAsync(async(req, res) => {
    const { id } = req.params;
    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "Academic Faculty updated successfully",
        data: result,
    });
});
export const AcademicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    updateAcademicFaculty
}
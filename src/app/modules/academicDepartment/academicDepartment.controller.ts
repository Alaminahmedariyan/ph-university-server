import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async(req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Academic Department created successfully",
        data: result,
    });
});
const getAllAcademicDepartment = catchAsync(async(req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    res.status(200).json({
        success: true,
        message: "Academic Department retrieved successfully",
        data: result,
    });
});
const getSingleAcademicDepartment = catchAsync(async(req, res) => {
    const { id } = req.params;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
    res.status(200).json({
        success: true,
        message: "Academic Department retrieved successfully",
        data: result,
    });
});
const updateAcademicDepartment = catchAsync(async(req, res) => {
    const { id } = req.params;
    const result = await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "Academic Department updated successfully",
        data: result,
    });
});
export const AcademicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment
}
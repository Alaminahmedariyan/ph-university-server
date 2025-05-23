import { TAcademicDepartment } from "./academicDepartment.interface";
import AcademicDepartment from "./academicDepartment.model";


const createAcademicDepartmentIntoDB = async(payload: TAcademicDepartment)=>{
const result = await AcademicDepartment.create(payload);
return result;
};

const getAllAcademicDepartmentFromDB = async()=>{
    const result = await AcademicDepartment.find({}).sort({createdAt: -1});
    return result;
};
const getSingleAcademicDepartmentFromDB = async(id: string)=>{
    const result = await AcademicDepartment.findById(id);
    return result;
};
const updateAcademicDepartmentIntoDB = async(id: string, payload: Partial<TAcademicDepartment>)=>{
    const result = await AcademicDepartment.findByIdAndUpdate({_id: id}, payload, {new: true});
    return result
}

export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB,
    updateAcademicDepartmentIntoDB
}
import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";


const academicDepartmentSchema = new Schema<TAcademicDepartment>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        academicFaculty: {
            type: Schema.Types.ObjectId,
            ref: "AcademicFaculty",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
academicDepartmentSchema.pre('save', async function(next){
      // check if the academic department already exists
    const isAcademicDepartmentExist = await AcademicDepartment.findOne({name: this.name});
    if(isAcademicDepartmentExist){
        throw new Error('Academic Department already exists');
    }
    next();
});
academicDepartmentSchema.pre('findOneAndUpdate', async function(next){
    const query = this.getQuery();
     const isAcademicDepartmentExist = await AcademicDepartment.findOne(query);
        if(!isAcademicDepartmentExist){
            throw new Error('This academic department does not exist');
        }
    next();
});

export const AcademicDepartment = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema);
export default AcademicDepartment;
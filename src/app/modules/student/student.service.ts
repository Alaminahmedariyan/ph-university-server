import { TStudent } from "./student.interface";
import Student from "./student.model";


// create a student
const createStudent = async (student:TStudent) => {
const result = await Student.create(student);
return result;
}
// get all students

const getStudents = async()=>{
    const result = await Student.find();
    return result;
}

// get a single student 
const getStudent = async (id:string) => {
    const result = await Student.findOne({id});
    return result;
}

export const StudentService = {
    createStudent,
    getStudents,
    getStudent,
}
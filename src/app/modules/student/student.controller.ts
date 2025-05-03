import { Request, Response } from 'express';
import { StudentService } from './student.service';


// create a student
const createStudent = async (req: Request, res: Response) => {
  try {
    const {student : studentData} = req.body;
    const result = await StudentService.createStudent(studentData);

    res.status(200).json({
      status: 'success',
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// get all students
const getStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getStudents();
        res.status(200).json({
        status: 'success',
        message: 'Students fetched successfully',
        data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

// get a single student
const getStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentService.getStudent(studentId);
        res.status(200).json({
            status: 'success',
            message: 'Student fetched successfully',
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

export const StudentController = {
    createStudent,
    getStudents,
    getStudent,
}

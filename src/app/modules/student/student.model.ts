import { model, Schema } from 'mongoose';
import { Guardian, LocalGuardian, TStudent, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true, trim: true, maxlength: 20 },
  middleName: { type: String, trim: true, maxlength: 20 },
  lastName: { type: String, required: true, trim: true, maxlength: 20 },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true, trim: true },
  fatherOccupation: { type: String, required: true, trim: true },
  fatherContactNumber: { type: String, required: true, trim: true },
  motherName: { type: String, required: true, trim: true },
  motherOccupation: { type: String, required: true, trim: true },
  motherContactNumber: { type: String, required: true, trim: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true, trim: true },
  occupation: { type: String, required: true, trim: true },
  contactNumber: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  relationship: { type: String, required: true, trim: true },
});
const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  name: userNameSchema,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  gender: { type: String, enum: ['male', 'female'], required: true },
  dateOfBirth: { type: String, required: true },
  contactNumber: { type: String, required: true, trim: true },
  emergencyContactNumber: { type: String, required: true, trim: true },
  presentAddress: { type: String, required: true, trim: true },
  permanentAddress: { type: String, required: true, trim: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  profileImage: { type: String, trim: true },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
});

// Create the Mongoose model
const Student = model<TStudent>('Student', studentSchema);

export default Student;

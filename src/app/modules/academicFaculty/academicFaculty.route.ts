import express from 'express';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyControllers } from './academicFaculty.controller';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get(
  '/:id',
  AcademicFacultyControllers.getSingleAcademicFaculty,
);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema),
  AcademicFacultyControllers.updateAcademicFaculty,
);
router.get(
  '/',
  AcademicFacultyControllers.getAllAcademicFaculty,
);
export const AcademicFacultyRoutes = router;
export default AcademicFacultyRoutes;

import express from 'express';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get(
  '/:id',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);
router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.updateAcademicDepartment,
);
router.get(
  '/',
  AcademicDepartmentControllers.getAllAcademicDepartment,
);
export const AcademicDepartmentRoutes = router;
export default AcademicDepartmentRoutes;

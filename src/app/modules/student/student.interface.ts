
export type Guardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNumber:string;
    motherName:string;
    motherOccupation:string;
    motherContactNumber:string;
};
export type UserName = {
    firstName: string;
    middleName: string; 
    lastName: string;
};
export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNumber: string;
    address: string;
    relationship: string;
}

export type TStudent = {
    id:string;
    name:UserName;
    email:string;
    gender:"male" | "female";
    dateOfBirth: string;
    contactNumber: string;
    emergencyContactNumber: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    profileImage?: string;
    isActive?: "active" | "blocked";

}
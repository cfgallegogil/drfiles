import { Schema } from 'mongoose';
import { UserModel } from './user.model';
import * as type from "../../types."



const DoctorSchema = new Schema<type.IDoctor>({
  medicalLicense: { type: String, required: true },
  mobileNumber: { type: String },
  digitalSignature: { type: Buffer },
});

export const DoctorModel = UserModel.discriminator<type.IDoctor>('Doctor', DoctorSchema);

// src/models/patient.model.ts

import { Schema } from 'mongoose';
import { UserModel } from './user.model';
import * as type from "../../types.";

const PatientSchema = new Schema<type.IPatient>({
  birthDate: { type: Date },
  gender: { type: String, required: true },
  mobileNumber: { type: String },
  landlineNumber: { type: String },
  residentialAddress: { type: String },
  countryOfResidence: { type: String, required: true },
  stateOfResidence: { type: String, required: true },
  cityOfResidence: { type: String, required: true },
  doctorId: { type: String },
});


export const PatientModel = UserModel.discriminator<type.IPatient>('Patient', PatientSchema);

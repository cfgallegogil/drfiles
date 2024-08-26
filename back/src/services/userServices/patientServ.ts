import bcrypt from 'bcrypt';
import { UserService } from './userServ';
import { PatientModel } from '../../models/userModels/patient.model';
import * as types from '../../types.'

export class PatientService extends UserService {
  constructor() {
    super();
  }


  async createPatient(patientData: Partial<types.IPatient>): Promise<types.IPatient> {
    const existingPatient = await PatientModel.findOne({ email: patientData.email });
    if (existingPatient) {
      throw new Error('Email already in use.');
    }

    const hashedPassword = await this.hashPassword(patientData.password as string);
    const patient = new PatientModel({
      ...patientData,
      password: hashedPassword,
    });

    return patient.save();
  }


  async getPatientById(patientId: string): Promise<types.IPatient | null> {
    return PatientModel.findById(patientId);
  }


  async getAllPatients(): Promise<types.IPatient[]> {
    return PatientModel.find();
  }


  async updatePatient(patientId: string, updateData: Partial<types.IPatient>): Promise<types.IPatient | null> {
    if (updateData.password) {
      updateData.password = await this.hashPassword(updateData.password);
    }

    return PatientModel.findByIdAndUpdate(patientId, updateData, { new: true });
  }


  async deletePatient(patientId: string): Promise<types.IPatient | null> {
    return PatientModel.findByIdAndDelete(patientId);
  }


  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}

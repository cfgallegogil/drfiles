// src/services/doctor.service.ts
import bcrypt from 'bcrypt';
import { UserService } from './userServ';
import { DoctorModel } from '../../models/userModels/doctor.mode';
import * as types from '../../types.'

export class doctorService extends UserService {
  constructor() {
    super();
  }

 
  async createdoctor(doctortData: Partial<types.IDoctor>): Promise<types.IDoctor> {
    const existingdoctor = await DoctorModel.findOne({ email: doctortData.email });
    if (existingdoctor) {
      throw new Error('Email already in use.');
    }

    const hashedPassword = await this.hashPassword(doctortData.password as string);
    const doctor = new DoctorModel({
      ...doctortData,
      password: hashedPassword,
    });

    return doctor.save();
  }


  async getdoctorById(doctorId: string): Promise<types.IDoctor | null> {
    return DoctorModel.findById(doctorId);
  }

  
  async getAlldoctors(): Promise<types.IDoctor[]> {
    return DoctorModel.find();
  }

  
  async updatedoctor(doctorId: string, updateData: Partial<types.IDoctor>): Promise<types.IDoctor | null> {
    if (updateData.password) {
      updateData.password = await this.hashPassword(updateData.password);
    }

    return DoctorModel.findByIdAndUpdate(doctorId, updateData, { new: true });
  }

  
  async deletedoctor(doctorId: string): Promise<types.IDoctor | null> {
    return DoctorModel.findByIdAndDelete(doctorId);
  }

  
  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}

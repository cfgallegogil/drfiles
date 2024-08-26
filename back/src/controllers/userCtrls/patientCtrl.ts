// src/controllers/patient.controller.ts

import { Request, Response } from 'express';
import { PatientService } from '../../services/userServices/patientServ';

const patientService = new PatientService();



export async function createPatient(req: Request, res: Response)  {
  try {
    const patientData = req.body;
    const newPatient = await patientService.createPatient(patientData);
    return res.status(201).json(newPatient);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};


export async function getAllPatients(_req: Request, res: Response){
  try {
    const patients = await patientService.getAllPatients();
    return res.status(200).json(patients);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};


export async function getPatientById (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const patient = await patientService.getPatientById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    return res.status(200).json(patient);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};


export async function updatePatient (req: Request, res: Response){
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedPatient = await patientService.updatePatient(id, updateData);
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    return res.status(200).json(updatedPatient);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};


export async function deletePatient (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletedPatient = await patientService.deletePatient(id);
    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    return res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

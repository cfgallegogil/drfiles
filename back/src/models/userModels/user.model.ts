import mongoose, { Schema } from 'mongoose'
import * as type from "../../types."

const UserSchema = new Schema<type.IUser>({
    documentType: { type: String, required: true },
    documentNumber: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    secondLastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  }, { discriminatorKey: 'role', timestamps: true });
  
  export const UserModel = mongoose.model<type.IUser>('User', UserSchema);
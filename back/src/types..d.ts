

export interface Form {
  nameForm: {
    type: String,
    required: true
  },
  varsForm: {
    type: [String],
    required: true
  },
  active: Boolean
}

export interface File {
  patientId: {
    type: String,
    required: true
  },
  expertId: {
    type: String,
    required: true
  },
  file: [{
    varForm: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }],
  active: Boolean
}
export interface Address{
  address: string;
  zipcode: number;
  city: string;
}


export interface IUser extends Document {
  _id?: string;
  documentType: string;
  documentNumber: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  secondLastName?: string;
  email: string;
  password: string;
  isActive: boolean;
  
}

interface IPatient extends IUser {
  birthDate: Date;
  gender: string;
  mobileNumber?: string;
  landlineNumber?: string;
  residentialAddress?: string;
  countryOfResidence: string;
  stateOfResidence: string;
  cityOfResidence: string;
  doctorId?: string;
}

interface IDoctor extends IUser {
  medicalLicense: string;
  mobileNumber?: string;
  digitalSignature?: Buffer;
}

export interface Login {
  email: string
  password: string
}

export interface TokenPayload {
  user_id: string
  user_email: string
  user_role: boolean
  iat: number
}

interface AuthenticatedRequest extends Request {
  user?: string
}

declare global {
  namespace Express {
    export interface Request {
      user?: string
    }
  }
}


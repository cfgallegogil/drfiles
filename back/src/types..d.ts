export interface User {
  nameUser: String,
  email: String,
  pass: String,
  role: {
    admin: Boolean,
    seller: Boolean
  },
  active: Boolean
}

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
import { Schema, model } from "mongoose";

const fileSchema = new Schema({
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
})

export default model('File', fileSchema)
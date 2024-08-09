import { Schema, model } from "mongoose";

const formSchema = new Schema({
  nameForm: {
    type: String,
    required: true
  },
  varsForm: {
    type: [String],
    required: true
  },
  active: Boolean
})

export default model('Form', formSchema)
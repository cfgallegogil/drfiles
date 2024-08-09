import Form from '../models/formModel';
import * as type from '../types.'

export async function getFormSrv() {
  try {
    const formList = await Form.find();
    return formList;
  } catch (error) {
    throw new Error('Error fetching services');
  }
}

export async function postFormSrv(form: type.Form) {
  const newForm = new Form(form)
  const formCreated = await newForm.save();
  return formCreated
}


export async function putFormSrv(form: type.Form) {
  const putForm = new Form(form)
  await Form.findByIdAndUpdate(putForm._id, putForm);
  return putForm
}

export async function deleteFormSrv(form: type.Form) {
  const deleteForm = new Form(form)
  await Form.findByIdAndDelete(deleteForm._id);
  return deleteForm
}
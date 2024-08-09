import File from '../models/fileModel';
import * as type from '../types.'

export async function getFileSrv() {
  try {
    const fileList = await File.find();
    return fileList;
  } catch (error) {
    throw new Error('Error fetching services');
  }
}

export async function postFileSrv(file: type.File) {
  const newFile = new File(file)
  const fileCreated = await newFile.save();
  return fileCreated
}


export async function putFileSrv(file: type.File) {
  const putFile = new File(file)
  await File.findByIdAndUpdate(putFile._id, putFile);
  return putFile
}

export async function deleteFileSrv(file: type.File) {
  const deleteFile = new File(file)
  await File.findByIdAndDelete(deleteFile._id);
  return deleteFile
}
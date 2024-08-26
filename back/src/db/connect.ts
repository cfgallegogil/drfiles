import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

async function connect() {
  if (!process.env.URLBD) {
    throw console.error('The env URL de BD is empty');
  }
  try {
    await mongoose.connect(process.env.URLBD)
    console.log('Connect to DB');
  }
  catch (err) {
    console.log('Error: ' + err);
  }
}

export default connect;
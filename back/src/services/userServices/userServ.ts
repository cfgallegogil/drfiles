import * as type from '../../types.';
import { UserModel } from '../../models/userModels/user.model';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../../config/const';

const KEY_SECRET = config.SECRET_KEY;

if (!KEY_SECRET) {
  throw new Error('La clave secreta no está definida');
}

export class UserService  {
 async  createUserService(user: type.IUser) {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error creating user: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred during user creation');
    }
  }
}

 createTokenService(user: type.IUser): string {
  const payload = { user_id: user._id };
  return jwt.sign(payload, KEY_SECRET as Secret, { expiresIn: '1h' }); // Añadir tiempo de expiración para mayor seguridad
}

 async  checkUserService(user: type.Login) {
  try {
    const userfind = await UserModel.findOne({ email: user.email });
    if (userfind && userfind.password) {
      const isPasswordMatch = await bcrypt.compare(user.password, userfind.password);
      if (isPasswordMatch) {
        const token = this.createTokenService(userfind);
        return { token, user: userfind };
      } else {
        throw new Error('Incorrect password');
      }
    }
    throw new Error('User not found');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error during authentication: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred during authentication');
    }
  }
}

 async  getAllUserService() {
  try {
    const UserList = await UserModel.find();
    return UserList;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching users: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching users');
    }
  }
}

 async  editUserService(user: type.IUser) {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, { new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating user: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while updating user');
    }
  }
}

 async  findUserById(id: string) {
  try {
    const user = await UserModel.findById(id);
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching user by ID');
    }
  }
}

 async  deleteUserService(id: string) {
  try {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error deleting user: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while deleting user');
    }
  }
}
}

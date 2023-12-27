import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not a valid email address.",
    },
  },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

const User = mongoose.model<IUser>("User", userSchema);

const initializeAdmin = async () => {
  const adminExists = await User.exists({ role: { $regex: /^admin$/i } });
  const password = "admin";
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  if (!adminExists) {
    await User.create({
      firstName: "Admin",
      lastName: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });
  }
};

initializeAdmin();

export default User;

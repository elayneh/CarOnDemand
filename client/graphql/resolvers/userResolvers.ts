// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import User, { IUser } from "./../../models/User";
// import { GeneratedType } from "./graphql/schemas/generated/userTypeDefs.ts:";
const secret_key = process.env.SECRET_KEY || "demosecretkey";
interface user {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}
interface AuthPayload {
  token: String;
  user: user;
}
export const resolvers = {
  Query: {
    getUserByUsername: async (_: any, email: string) => {
      const user = await User.findOne({ email });
      if (!user) {
        return "User not found";
      } else {
        return user;
      }
    },
  },
  Mutation: {
    registerUser: async (
      parent: any,
      { firstName, lastName, email, password }: any
    ): Promise<any> => {
      try {
        const isUserExists = await User.findOne({
          email,
        });
        if (isUserExists) {
          console.warn("User already exist");
          throw new Error("Email is already registered.");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        // const token = jwt.sign({ userId: User.id }, secret_key, {
        //   expiresIn: "1d",
        // });
        return user;
      } catch (err: any) {
        throw new Error(`Registration failed: ${err.message}`);
      }
    },

    ////
    // async (
    //   parent: any,
    //   args: { username: string; email: string; password: string }
    // ): Promise<GeneratedType.AuthPayload> => {
    //   try {
    // Check if username or email is already registered
    // const existingUser = await User.findOne({
    //   $or: [{ username: args.username }, { email: args.email }],
    // });

    // if (existingUser) {
    //   throw new Error("Username or email is already registered.");
    // }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(args.password, 10);

    // Create a new user
    // const newUser: IUser = await User.create({
    //   username: args.username,
    //   email: args.email,
    //       password: hashedPassword,
    //     });

    //     // Create a JWT token
    //     const token = jwt.sign({ userId: newUser.id }, secret_key, {
    //       expiresIn: "1h",
    //     });

    //     return { token, user: newUser };
    //   } catch (error: any) {
    //     throw new Error(`Error registering user: ${error.message}`);
    //   }
    // },
    // // deleteUserByUsername: async (
    // //   _: any,
    // //   { username }: { username: string }
    // ) => {
    //   try {
    //     // Find and delete the user by username
    //     const deletedUser = await User.findOneAndDelete({ username });

    //     if (deletedUser) {
    //       return {
    //         success: true,
    //         message: "User deleted successfully",
    //         user: deletedUser,
    //       };
    //     } else {
    //       return {
    //         success: false,
    //         message: "User not found or deletion failed",
    //       };
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     return {
    //       success: false,
    //       message: "Error deleting user by username",
    //     };
    //   }
    // },
    //Other mutations...
  },
  //Other resolvers...
};

module.exports = resolvers;

const bcrypt = require("bcrypt");
const User = require("./../../models/User");

export const resolvers = {
  Query: {
    hello: () => "hello World",
    getUserByUsername: async (_: any, username: string) => {
      const user = await User.findOne(username);
      if (!user) {
        return "User not found";
      } else {
        return user;
      }
    },
  },
  Mutation: {
    registerUser: async (_: any, { username, email, password }: any) => {
      const isUserExists = await User.findOne({ username } || { email });
      if (isUserExists) {
        console.warn("User already exist");
        return "User already exist";
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      return user;
    },
    deleteUserByUsername: async (
      _: any,
      { username }: { username: string }
    ) => {
      try {
        // Find and delete the user by username
        const deletedUser = await User.findOneAndDelete({ username });

        if (deletedUser) {
          return {
            success: true,
            message: "User deleted successfully",
            user: deletedUser,
          };
        } else {
          return {
            success: false,
            message: "User not found or deletion failed",
          };
        }
      } catch (error) {
        console.error(error);
        return {
          success: false,
          message: "Error deleting user by username",
        };
      }
    },
  },
};

module.exports = resolvers;

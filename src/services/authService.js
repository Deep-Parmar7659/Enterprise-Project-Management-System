import { userService } from "./userService";

export const authService = {
  login(email, password) {
    const users = userService.getUsers();

    return users.find(
      (user) => user.email === email && user.password === password,
    );
  },

  register(userData) {
    const users = userService.getUsers();

    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const newUser = {
      id: Date.now(),
      ...userData,
    };

    users.push(newUser);

    userService.saveUsers(users);

    return {
      success: true,
      user: newUser,
    };
  },
};

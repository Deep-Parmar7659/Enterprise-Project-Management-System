import { STORAGE_KEYS } from "../constants";
import { DEFAULT_USERS } from "../mock/defaultUsers";

export const userService = {
  initializeUsers() {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);

    if (!users) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    }
  },

  getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  },

  saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },
};

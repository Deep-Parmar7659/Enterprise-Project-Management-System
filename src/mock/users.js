import { ROLES } from "../constants";

export const USERS = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@epms.com",
    password: "123456",
    role: ROLES.ADMIN,
  },

  {
    id: 2,
    name: "Manager User",
    email: "manager@epms.com",
    password: "123456",
    role: ROLES.MANAGER,
  },

  {
    id: 3,
    name: "Employee User",
    email: "employee@epms.com",
    password: "123456",
    role: ROLES.EMPLOYEE,
  },
];

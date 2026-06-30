import { ROUTES, ROLES } from "./index";

export const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    path: ROUTES.HOME,
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.EMPLOYEE],
  },

  {
    label: "Projects",
    path: ROUTES.PROJECTS,
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.EMPLOYEE],
  },

  {
    label: "Tasks",
    path: ROUTES.TASKS,
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.EMPLOYEE],
  },

  {
    label: "Teams",
    path: ROUTES.TEAMS,
    roles: [ROLES.ADMIN, ROLES.MANAGER],
  },

  {
    label: "Reports",
    path: ROUTES.REPORTS,
    roles: [ROLES.ADMIN],
  },

  {
    label: "Settings",
    path: ROUTES.SETTINGS,
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.EMPLOYEE],
  },
];

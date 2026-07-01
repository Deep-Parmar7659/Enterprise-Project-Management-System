import { PROJECT_STATUS, TASK_PRIORITY } from "../constants";

export const DEFAULT_TASKS = [
  {
    id: 1,
    title: "Setup Authentication",
    description: "Implement Login Module",
    projectId: 1,
    assignee: "Admin User",
    status: PROJECT_STATUS.COMPLETED,
    priority: TASK_PRIORITY.HIGH,
  },

  {
    id: 2,
    title: "Create Dashboard",
    description: "Build Dashboard UI",
    projectId: 1,
    assignee: "Manager User",
    status: PROJECT_STATUS.IN_PROGRESS,
    priority: TASK_PRIORITY.MEDIUM,
  },
];

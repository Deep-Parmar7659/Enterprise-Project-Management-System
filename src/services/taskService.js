import { STORAGE_KEYS } from "../constants";
import { DEFAULT_TASKS } from "../data/tasks";

export const taskService = {
  initializeTasks() {
    try {
      const tasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS));

      if (!Array.isArray(tasks) || tasks.length === 0) {
        localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(DEFAULT_TASKS));
      }
    } catch {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(DEFAULT_TASKS));
    }
  },

  getTasks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS)) || [];
  },

  saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  },

  createTask(taskData) {
    const tasks = this.getTasks();

    const task = {
      id: Date.now(),
      ...taskData,
    };

    tasks.push(task);

    this.saveTasks(tasks);

    return task;
  },

  updateTask(id, data) {
    const tasks = this.getTasks();

    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...data } : task,
    );

    this.saveTasks(updatedTasks);

    return updatedTasks;
  },

  deleteTask(id) {
    const tasks = this.getTasks();

    const updatedTasks = tasks.filter((task) => task.id !== id);

    this.saveTasks(updatedTasks);

    return updatedTasks;
  },
};

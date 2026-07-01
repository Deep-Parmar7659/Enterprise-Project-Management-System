import { createContext, useContext, useState } from "react";
import { taskService } from "../services/taskService";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    taskService.initializeTasks();
    return taskService.getTasks();
  });

  const createTask = (taskData) => {
    const task = taskService.createTask(taskData);

    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (id, data) => {
    const updatedTasks = taskService.updateTask(id, data);

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = taskService.deleteTask(id);

    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  return useContext(TaskContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { TaskProvider, useTasks };

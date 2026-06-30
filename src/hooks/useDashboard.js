import { useMemo } from "react";

import useProjects from "./useProjects";
import useTasks from "./useTasks";

function useDashboard() {
  const { projects } = useProjects();
  const { tasks } = useTasks();

  const statistics = useMemo(() => {
    const totalProjects = projects.length;

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
      (task) => task.status === "Completed",
    ).length;

    const highPriorityTasks = tasks.filter(
      (task) => task.priority === "High",
    ).length;

    return {
      totalProjects,
      totalTasks,
      completedTasks,
      highPriorityTasks,
    };
  }, [projects, tasks]);

  return statistics;
}

export default useDashboard;

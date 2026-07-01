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

    const pendingTasks = totalTasks - completedTasks;

    const highPriorityTasks = tasks.filter(
      (task) => task.priority === "High",
    ).length;

    const completionRate =
      totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const upcomingTasks = [...tasks]
      .filter((task) => task.dueDate)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      .slice(0, 5);

    return {
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks,
      highPriorityTasks,
      completionRate,
      upcomingTasks,
    };
  }, [projects, tasks]);

  return statistics;
}

export default useDashboard;

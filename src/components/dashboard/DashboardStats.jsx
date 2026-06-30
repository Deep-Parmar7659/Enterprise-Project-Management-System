import {
  FolderKanban,
  ListTodo,
  CircleCheckBig,
  TriangleAlert,
} from "lucide-react";

import useDashboard from "../../hooks/useDashboard";
import StatCard from "../shared/StatCard";

const DashboardStats = () => {
  const { totalProjects, totalTasks, completedTasks, highPriorityTasks } =
    useDashboard();

  return (
    <section>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={totalProjects}
          subtitle="Projects available"
          icon={FolderKanban}
          iconColor="text-blue-600"
          iconBackground="bg-blue-100"
        />

        <StatCard
          title="Total Tasks"
          value={totalTasks}
          subtitle="Tasks across projects"
          icon={ListTodo}
          iconColor="text-violet-600"
          iconBackground="bg-violet-100"
        />

        <StatCard
          title="Completed Tasks"
          value={completedTasks}
          subtitle="Successfully finished"
          icon={CircleCheckBig}
          iconColor="text-green-600"
          iconBackground="bg-green-100"
        />

        <StatCard
          title="High Priority"
          value={highPriorityTasks}
          subtitle="Need immediate attention"
          icon={TriangleAlert}
          iconColor="text-red-600"
          iconBackground="bg-red-100"
        />
      </div>
    </section>
  );
};

export default DashboardStats;

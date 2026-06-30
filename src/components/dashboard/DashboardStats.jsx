import StatCard from "../shared/StatCard";
import useDashboard from "../../hooks/useDashboard";

const DashboardStats = () => {
  const { totalProjects, totalTasks, completedTasks, highPriorityTasks } =
    useDashboard();

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={totalProjects}
          subtitle="Projects available in the system"
        />

        <StatCard
          title="Total Tasks"
          value={totalTasks}
          subtitle="Tasks across all projects"
        />

        <StatCard
          title="Completed Tasks"
          value={completedTasks}
          subtitle="Tasks marked as completed"
        />

        <StatCard
          title="High Priority"
          value={highPriorityTasks}
          subtitle="Tasks requiring attention"
        />
      </div>
    </section>
  );
};

export default DashboardStats;

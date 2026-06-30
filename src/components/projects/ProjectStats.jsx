function ProjectStats({ projects }) {
  const total = projects.length;

  const pending = projects.filter(
    (project) => project.status === "Pending",
  ).length;

  const inProgress = projects.filter(
    (project) => project.status === "In Progress",
  ).length;

  const completed = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="border p-4 rounded-lg">
        <h3>Total</h3>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="border p-4 rounded-lg">
        <h3>Pending</h3>
        <p className="text-2xl font-bold">{pending}</p>
      </div>

      <div className="border p-4 rounded-lg">
        <h3>In Progress</h3>
        <p className="text-2xl font-bold">{inProgress}</p>
      </div>

      <div className="border p-4 rounded-lg">
        <h3>Completed</h3>
        <p className="text-2xl font-bold">{completed}</p>
      </div>
    </div>
  );
}

export default ProjectStats;

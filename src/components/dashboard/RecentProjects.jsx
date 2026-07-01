import useProjects from "../../hooks/useProjects";

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

function RecentProjects() {
  const { projects } = useProjects();

  const recentProjects = [...projects].slice(-5).reverse();

  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Recent Projects</h2>

      {recentProjects.length === 0 ? (
        <p className="text-gray-500">No projects available.</p>
      ) : (
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border p-4 transition hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{project.name}</h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[project.status] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                {project.description}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Owner: <strong>{project.owner}</strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentProjects;

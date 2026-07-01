import useDashboard from "../../hooks/useDashboard";

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

function UpcomingDeadlines() {
  const { upcomingTasks } = useDashboard();

  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Upcoming Deadlines</h2>

      {upcomingTasks.length === 0 ? (
        <p className="text-gray-500">No upcoming deadlines.</p>
      ) : (
        <div className="space-y-4">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg border p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{task.title}</h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[task.status] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Assigned to {task.assignee}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default UpcomingDeadlines;

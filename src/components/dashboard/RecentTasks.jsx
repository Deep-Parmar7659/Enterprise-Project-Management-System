import useTasks from "../../hooks/useTasks";

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const priorityStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-orange-100 text-orange-700",
  Low: "bg-gray-100 text-gray-700",
};

function RecentTasks() {
  const { tasks } = useTasks();

  const recentTasks = [...tasks].slice(-5).reverse();

  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Recent Tasks</h2>

      {recentTasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <div className="space-y-4">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg border p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{task.title}</h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    priorityStyles[task.priority] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {task.priority}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">{task.description}</p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-500">{task.assignee}</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[task.status] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentTasks;

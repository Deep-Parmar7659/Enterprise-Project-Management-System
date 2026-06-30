import useDashboard from "../../hooks/useDashboard";

const DashboardProgress = () => {
  const { completedTasks, pendingTasks, completionRate } = useDashboard();

  return (
    <section className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Project Progress</h2>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-600">Overall Completion</span>

          <span className="font-semibold">{completionRate}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-green-50 p-4">
          <p className="text-sm text-gray-600">Completed</p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            {completedTasks}
          </p>
        </div>

        <div className="rounded-lg bg-yellow-50 p-4">
          <p className="text-sm text-gray-600">Pending</p>

          <p className="mt-1 text-2xl font-bold text-yellow-600">
            {pendingTasks}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardProgress;

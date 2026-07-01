import Button from "../ui/Button";
import useProjects from "../../hooks/useProjects";

function TaskCard({ task, onEdit, onDelete }) {
  const { projects } = useProjects();

  const project = projects.find((project) => project.id === task.projectId);

  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Pending: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>

        <p className="mt-1 text-sm text-gray-600">{task.description}</p>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Project</span>

          <span className="font-semibold">
            {project?.name || "Unknown Project"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Assignee</span>

          <span className="font-semibold">{task.assignee}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Due Date</span>

          <span className="font-semibold">{task.dueDate || "Not Set"}</span>
        </div>
      </div>

      {/* Badges */}

      <div className="mt-5 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            priorityColors[task.priority] || "bg-gray-100 text-gray-700"
          }`}
        >
          {task.priority}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusColors[task.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {task.status}
        </span>
      </div>

      {/* Actions */}

      <div className="mt-6 flex gap-3">
        <Button
          variant="secondary"
          className="flex-1"
          onClick={() => onEdit(task)}
        >
          Edit
        </Button>

        <Button
          variant="danger"
          className="flex-1"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;

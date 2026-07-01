import { Button } from "../ui";
import useProjects from "../../hooks/useProjects";

function TaskCard({ task, onEdit, onDelete }) {
  const { projects } = useProjects();

  const project = projects.find((project) => project.id === task.projectId);

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold">{task.title}</h3>

      <p className="mt-2 text-gray-600">{task.description}</p>

      <div className="mt-5 space-y-2 text-sm">
        <p>
          <span className="font-semibold">Project:</span>{" "}
          {project?.name ?? "Unknown Project"}
        </p>

        <p>
          <span className="font-semibold">Assignee:</span> {task.assignee}
        </p>

        <p>
          <span className="font-semibold">Due Date:</span>{" "}
          {task.dueDate || "Not Set"}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityBadge(
            task.priority,
          )}`}
        >
          {task.priority}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadge(
            task.status,
          )}`}
        >
          {task.status}
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="secondary" onClick={() => onEdit(task)}>
          Edit
        </Button>

        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p>{task.description}</p>
      <p className="mt-2">Project ID: {task.projectId}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Status: {task.status}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(task)}
          className="border px-3 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="border px-3 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

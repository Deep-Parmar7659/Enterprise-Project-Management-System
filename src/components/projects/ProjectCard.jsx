import Card from "../ui/Card";
import StatusBadge from "../projects/StatusBadge";

function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <Card>
      <h2 className="text-xl font-semibold">{project.name}</h2>
      <p className="mt-2 text-gray-600">{project.description}</p>

      <div className="mt-4">
        <div className="mt-2">
          <StatusBadge status={project.status} />
        </div>
        <p>Owner: {project.owner}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(project)}
          className="px-3 py-2 border rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(project.id)}
          className="px-3 py-2 border rounded"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

export default ProjectCard;

import { useState } from "react";
import { Button, Input } from "../ui";
import { PROJECT_STATUS } from "../../constants";
import { userService } from "../../services/userService";
import { projectService } from "../../services/projectService";

function TaskForm({ onSubmit, initialData, submitText = "Create Task" }) {
  const users = userService.getUsers();
  const projects = projectService.getProjects();

  const [formData, setFormData] = useState({
    title: initialData?.title ?? "",
    description: initialData?.description ?? "",
    projectId: initialData?.projectId ?? "",
    assignee: initialData?.assignee ?? "",
    status: initialData?.status ?? PROJECT_STATUS.PENDING,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      projectId: Number(formData.projectId),
    });

    if (!initialData) {
      setFormData({
        title: "",
        description: "",
        projectId: "",
        assignee: "",
        status: PROJECT_STATUS.PENDING,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Task Title"
        value={formData.title}
        onChange={(e) => handleChange("title", e.target.value)}
      />

      <Input
        placeholder="Description"
        value={formData.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />

      <select
        className="w-full border rounded-lg p-2"
        value={formData.projectId}
        onChange={(e) => handleChange("projectId", e.target.value)}
      >
        <option value="">Select Project</option>

        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>

      <select
        className="w-full border rounded-lg p-2"
        value={formData.assignee}
        onChange={(e) => handleChange("assignee", e.target.value)}
      >
        <option value="">Assign User</option>

        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      <select
        className="w-full border rounded-lg p-2"
        value={formData.status}
        onChange={(e) => handleChange("status", e.target.value)}
      >
        <option value={PROJECT_STATUS.PENDING}>Pending</option>

        <option value={PROJECT_STATUS.IN_PROGRESS}>In Progress</option>

        <option value={PROJECT_STATUS.COMPLETED}>Completed</option>
      </select>

      <Button type="submit">{submitText}</Button>
    </form>
  );
}

export default TaskForm;

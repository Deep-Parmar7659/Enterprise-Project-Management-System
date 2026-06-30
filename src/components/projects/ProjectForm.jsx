import { useState } from "react";
import { Button, Input } from "../ui";
import { PROJECT_STATUS } from "../../constants";

function ProjectForm({ onSubmit, initialData, submitText = "Create Project" }) {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(
    initialData?.description || "",
  );
  const [prevInitialData, setPrevInitialData] = useState(initialData);

  if (initialData !== prevInitialData) {
    setPrevInitialData(initialData);
    setName(initialData?.name || "");
    setDescription(initialData?.description || "");
  }

  const [status, setStatus] = useState(PROJECT_STATUS.PENDING);
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      description,
      status,
    });

    if (initialData) {
      setName(initialData.name);

      setDescription(initialData.description);

      setStatus(initialData.status);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border rounded-lg p-2"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <Button type="submit">{submitText}</Button>
    </form>
  );
}

export default ProjectForm;

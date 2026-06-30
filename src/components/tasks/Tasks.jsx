import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/tasks/TaskCard";
import TaskForm from "../../components/tasks/TaskForm";
import { SectionTitle } from "../../components/ui";

function Tasks() {
  const { tasks, createTask, updateTask, deleteTask } = useTasks();
  const [editingTask, setEditingTask] = useState(null);
  const handleCreateTask = (taskData) => {
    createTask(taskData);
  };
  const handleUpdateTask = (taskData) => {
    updateTask(editingTask.id, taskData);
    setEditingTask(null);
  };

  return (
    <div>
      <SectionTitle>Tasks</SectionTitle>

      <TaskForm
        initialData={editingTask}
        submitText={editingTask ? "Update Task" : "Create Task"}
        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={setEditingTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;

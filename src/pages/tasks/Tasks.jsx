import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/tasks/TaskCard";

function Tasks() {
  const { tasks, deleteTask } = useTasks();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Task Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => {}}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;

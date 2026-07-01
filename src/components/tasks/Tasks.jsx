import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/tasks/TaskCard";
import TaskToolbar from "../../components/tasks/TaskToolbar";

function Tasks() {
  const { tasks, deleteTask } = useTasks();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ? true : task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ? true : task.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title),
    );

  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold">Task Management</h1>

      <TaskToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {filteredTasks.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">No Tasks Found</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={() => {}}
              onDelete={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;

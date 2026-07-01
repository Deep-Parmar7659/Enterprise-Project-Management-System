import { FolderPlus, ListPlus, FolderKanban, ListTodo } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

const actions = [
  {
    title: "Create Project",
    icon: FolderPlus,
    path: "/projects",
  },
  {
    title: "Create Task",
    icon: ListPlus,
    path: "/tasks",
  },
  {
    title: "View Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    title: "View Tasks",
    icon: ListTodo,
    path: "/tasks",
  },
];

const DashboardQuickActions = () => {
  const navigate = useNavigate();

  return (
    <section className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="flex items-center justify-center gap-2"
            >
              <Icon size={18} />
              {action.title}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardQuickActions;

import { AuthProvider } from "../../context/AuthContext";
import { ProjectProvider } from "../../context/ProjectContext";
import { TaskProvider } from "../../context/TaskContext";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ProjectProvider>
        <TaskProvider>{children}</TaskProvider>
      </ProjectProvider>
    </AuthProvider>
  );
}

export default AppProviders;

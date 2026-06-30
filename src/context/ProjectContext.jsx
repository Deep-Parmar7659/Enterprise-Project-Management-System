import { createContext, useContext, useState } from "react";
import { projectService } from "../services/projectService";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    return projectService.getProjects();
  });

  const createProject = (projectData) => {
    const project = projectService.createProject(projectData);
    setProjects((prev) => [...prev, project]);
  };

  const updateProject = (projectId, updatedData) => {
    const updatedProjects = projectService.updateProject(
      projectId,
      updatedData,
    );

    setProjects(updatedProjects);
  };

  const deleteProject = (projectId) => {
    const updatedProjects = projectService.deleteProject(projectId);

    setProjects(updatedProjects);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        createProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

function useProjects() {
  return useContext(ProjectContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { ProjectProvider, useProjects };

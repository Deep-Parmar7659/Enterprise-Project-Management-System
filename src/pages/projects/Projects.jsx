import { useState } from "react";
import { SectionTitle } from "../../components/ui";
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectForm from "../../components/projects/ProjectForm";
import ProjectStats from "../../components/projects/ProjectStats";
import ProjectToolbar from "../../components/projects/ProjectToolbar";
import useAuth from "../../hooks/useAuth";
import useProjects from "../../hooks/useProjects";

function Projects() {
  const { user } = useAuth();
  const { projects, createProject, updateProject, deleteProject } =
    useProjects();
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const handleCreateProject = (projectData) => {
    createProject({
      ...projectData,
      owner: user?.name,
    });
  };

  const handleUpdateProject = (projectData) => {
    updateProject(editingProject.id, projectData);
    setEditingProject(null);
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(projectId);
  };

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" ? true : project.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <ProjectStats projects={projects} />
      <ProjectToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <ProjectForm
        initialData={editingProject}
        submitText={editingProject ? "Update Project" : "Create Project"}
        onSubmit={editingProject ? handleUpdateProject : handleCreateProject}
      />
      {filteredProjects.length === 0 ? (
        <div className="border rounded-lg p-8 text-center mt-6">
          No Projects Found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={setEditingProject}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;

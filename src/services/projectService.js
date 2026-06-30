import { STORAGE_KEYS } from "../constants";
import { DEFAULT_PROJECTS } from "../data/projects";

export const projectService = {
  initializeProjects() {
    const projects = localStorage.getItem(STORAGE_KEYS.PROJECTS);

    if (!projects) {
      localStorage.setItem(
        STORAGE_KEYS.PROJECTS,
        JSON.stringify(DEFAULT_PROJECTS),
      );
    }
  },

  getProjects() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS)) || [];
  },

  saveProjects(projects) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  createProject(project) {
    const projects = this.getProjects();

    const newProject = {
      id: Date.now(),
      ...project,
    };

    projects.push(newProject);

    this.saveProjects(projects);

    return newProject;
  },

  updateProject(projectId, updatedData) {
    const projects = this.getProjects();

    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            ...updatedData,
          }
        : project,
    );

    this.saveProjects(updatedProjects);

    return updatedProjects;
  },

  deleteProject(projectId) {
    const projects = this.getProjects();

    const updatedProjects = projects.filter(
      (project) => project.id !== projectId,
    );

    this.saveProjects(updatedProjects);

    return updatedProjects;
  },
};

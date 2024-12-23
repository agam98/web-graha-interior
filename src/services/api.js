import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const projectService = {
  async getAllProjects() {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  },

  async getProjectById(id) {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch project');
    }
  },

  async createProject(formData) {
    try {
      const response = await api.post('/projects', formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create project');
    }
  },

  async deleteProject(id) {
    try {
      await api.delete(`/projects/${id}`);
    } catch (error) {
      throw new Error('Failed to delete project');
    }
  }
};
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectForm from '../components/admin/ProjectForm';
import ProjectList from '../components/admin/ProjectList';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/projects', formData);
      fetchProjects();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
      <ProjectForm onSubmit={handleSubmit} />
      <ProjectList projects={projects} onDelete={handleDelete} />
    </div>
  );
}

export default AdminDashboard;
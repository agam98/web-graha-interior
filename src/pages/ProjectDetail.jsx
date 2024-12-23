import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectService } from '../services/api';
import { handleError } from '../utils/errorHandler';

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await projectService.getProjectById(id);
        setProject(data);
      } catch (err) {
        setError(handleError(err));
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  if (!project) {
    return <div className="text-center py-8">Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img 
        src={project.image_url} 
        alt={project.title}
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.category && (
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {project.category}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
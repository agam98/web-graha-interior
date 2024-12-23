function ProjectList({ projects, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Manage Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="font-semibold mb-2">{project.title}</h4>
            <button
              onClick={() => onDelete(project.id)}
              className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
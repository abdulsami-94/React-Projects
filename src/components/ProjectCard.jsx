import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{project.description}</p>
      <Link to={`/project/${project.id}`} className="inline-flex items-center justify-center w-full py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:opacity-90 transition-opacity">Open Project →</Link>
    </div>
  );
}

export default ProjectCard;
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if (!project) return <div className="project-page">Project not found</div>;
  const Component = project.component;
  return <div className="project-page"><Component /></div>;
}

export default ProjectPage;
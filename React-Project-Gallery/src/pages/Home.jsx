import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Home() {
  return (
    <div className="home">
      <h1>Project Gallery</h1>
      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
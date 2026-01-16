import { Link, useParams } from "react-router-dom";

function Projects(){
    const { id } = useParams();

    const projects = [
            { id: 1, title: "Counter App" },
            { id: 2, title: "Timer App" },
            { id: 3, title: "Texting App" },
            { id: 4, title: "Insta App" },
            { id: 5, title: "Snap App" },
            { id: 6, title: "Tele App" },
        ];

        if (!id) {
            return (
            <div className="projects">
                <h2>Projects Lists</h2>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            );
        }



        const project = projects.find(
            (p) => p.id === Number(id)
        );

        if (!project) {
            return <p>Project not found</p>;
        }

    return(
        <div className="projects">
            <h2>{projects.title}</h2>
            <p>Project ID: {projects.id}</p>
        </div>  
    );
}

export default Projects;
import "./Project-card.css"

function ProjectCard({
    name,
    screenshot,
    github,
    tech,
    description,
    function: projectFunction,
    learned,
    role,
    challenges
}) {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{name}</h2>

                <p>{description}</p>

                <p><strong>Tech:</strong> {tech}</p>
                <p><strong>Function:</strong> {projectFunction}</p>
                <p><strong>Learned:</strong> {learned}</p>
                <p><strong>Role:</strong> {role}</p>
                <p><strong>Challenges:</strong> {challenges}</p>

                <img src={screenshot} alt={name} />

                <a href={github} target="_blank">Github</a>
            </div>
        </div>
    );
}

export default ProjectCard;
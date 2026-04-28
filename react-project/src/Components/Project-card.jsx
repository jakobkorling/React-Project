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
    challenges,
    onClick
}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-content">
                <h3>{name}</h3>

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
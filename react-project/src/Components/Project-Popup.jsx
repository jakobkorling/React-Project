import "./Project-Popup.css";

function ProjectPopup({ project, onClose}) {
    if (!project) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>
                    x
                </button>

                <img 
                    className="popup-image"
                    src={project.screenshot}
                    alt={project.name}
                />

                <h2>{project.name}</h2>

                <p className="popup-description">{project.description}</p>

                <div className="popup-section">
                    <h3>What it does</h3>
                    <p>{project.function}</p>
                </div>

                <div className="popup-section">
                    <h3>Tech used</h3>
                    <p>{project.tech}</p>
                </div>

                <div className="popup-section">
                    <h3>What I learned</h3>
                    <p>{project.learned}</p>
                </div>

                <a className="popup-link" href={project.github} target="_blank" rel="norefferer">
                    View GitHub Repo
                </a>
            </div>
        </div>
    )
}

export default ProjectPopup
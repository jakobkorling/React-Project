import { useState } from "react";
import PreviousProjects from "../Components/Previous-projects";

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);

    return(
        <div className="portfolio-container">
            <h2 className="projects-title">Portfolio</h2>

            <button onClick={() => setShowProjects(!showProjects)}>
                {showProjects ? "Hide Projects" : "Show Projects"}
            </button>

            {showProjects && <PreviousProjects />}
        </div>
    );
}

export default Portfolio;
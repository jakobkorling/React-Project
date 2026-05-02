import "./Previous-projects.css"
import ProjectCard from "./Project-card";
import { useState } from "react";
import ProjectPopup from "./Project-Popup";

import genesisImg from "../images/Genesis.png";
import testImg from "../images/Test-skills.png";
import verdeImg from "../images/Verde-ink.png";

function PreviousProjects() {

    const [selectedProject, setSelectedProject] = useState(null);
    const [search, setSearch] = useState("");

    const projects = [ 
        {
            name: "Genesis",
            screenshot: genesisImg,
            github: "https://github.com/jakobkorling/Genesis-Project.git",
            tech: "HTML, CSS",
            description: "Recreated a Figma design",
            function: "A normal website",
            learned: "Creating a gallery",
            role: "Solo",
            challenges: "Figuring out the positioning of the grid items",
        },
        {
            name: "Test my skills",
            screenshot: testImg,
            github: "https://github.com/jakobkorling/Test-my-skills.git",
            tech: "HTML, CSS",
            description: "Recreated a Figma design",
            function: "A normal website",
            learned: "Creating reusable code",
            role: "Solo",
            challenges: "Creating reusable content cards",
        },
        {
            name: "Verde Ink",
            screenshot: verdeImg,
            github: "https://github.com/ls-95/verde-ink.git",
            tech: "HTML, CSS",
            description: "Created the gallery and footer",
            function: "A normal website",
            learned: "Agile work in a group project",
            role: "Group project",
            challenges: "Creating a clean footer",   
        },
    ];

    const filteredProjects = projects.filter((project) => {
        return (
            project.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            project.tech.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            project.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
        );
    });

      return (
    <div className="container">
        <h1>My Portfolio</h1>

        <input 
            className="search-input"
            type="text"
            placeholder="Search project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid">
            {filteredProjects.map((project) => (
                <ProjectCard
                    key={project.name}
                    {...project}
                    onClick={() => setSelectedProject(project)}
                />
            ))}
        </div>
        
        {selectedProject && (
            <ProjectPopup
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        )}

    </div>
  )
}

export default PreviousProjects;
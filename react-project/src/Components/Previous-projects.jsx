import "./Previous-projects.css"
import ProjectCard from "./Project-card";
import genesisImg from "../images/Genesis.png";
import testImg from "../images/Test-skills.png";
import verdeImg from "../images/Verde-ink.png";

function PreviousProjects()
 {
      return (
    <div className="container">
        <h1>My Portfolio</h1>

        <div className="grid">
            <ProjectCard
                name="Genesis"
                screenshot={genesisImg}
                github="https://github.com/jakobkorling/Genesis-Project.git"
                tech="HTML, CSS"
                description="Recreated a Figma design"
                function="A normal website"
                learned="Creating a good looking gallery with grid"
                role="Solo"
                challenges="Figuring out the positioning of the grid items"
            />

            <ProjectCard
                name="Test my skills"
                screenshot={testImg}
                github="https://github.com/jakobkorling/Test-my-skills.git"
                tech="HTML, CSS"
                description="Recreated a Figma design"
                function="A normal website"
                learned="Creating reusable code"
                role="Solo"
                challenges="Creating reusable content cards"
            />

            <ProjectCard
                name="Verde Ink"
                screenshot={verdeImg}
                github="https://github.com/ls-95/verde-ink.git"
                tech="HTML, CSS"
                description="Created the gallery and footer"
                function="A normal website"
                learned="Agile work in a group project"
                role="Group project"
                challenges="Creating a clean footer"
            />
        </div>
    </div>
  )
}

export default PreviousProjects;
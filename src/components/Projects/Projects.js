import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/blog3.jpeg";
import chatify from "../../Assets/Projects/rodan.png";
import suicide from "../../Assets/Projects/blog4.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="“Rodan + Fields Clone”."
              description="Replicated www.rodanandfields.com using HTML/CSS and tried our level best to make it
              a bit more interactive using DOM manipulations."
              ghLink="https://github.com/AWMprabhat/Rodanandfields"
              demoLink="https://rodanfields.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="zappos.com."
              description="A indivisal project based on cloning the US website zappos.com.This website contains many functionalities which almost cloned the real website."
              ghLink="https://github.com/AWMprabhat/Cloning-ZAPPOS.COM"
              demoLink="https://clone-of-zappos.netlify.app"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="“KFC India”."
              description="Replicated KFC INDIA, using HTML/CSS and tried our level best to make it
              a bit more interactive using DOM manipulations"
              ghLink="https://github.com/AWMprabhat/KFC-.-COM___Clone"
              demoLink=" https://rococo-sunburst-64227a.netlify.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from 'react'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectsCard from './ProjectsCard';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';


const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
  return (
    <section className='project' id='project'>
        <Container id="projects">
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quae cum aut nobis atque culpa corporis enim, sequi, facere molestiae iure. Qui asperiores nihil, sed saepe necessitatibus illo incidunt facere?</p>
                    <Tab.Container id='project-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {projects.map((project, index) => {
                                        return (
                                            <ProjectsCard key={index} {...project}/>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tempore facere nisi, dolore illo harum obcaecati illum laudantium, quia inventore nemo aut quos placeat aspernatur pariatur magnam quidem cum deserunt.
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque nostrum similique numquam modi eum. Excepturi mollitia saepe eos repellat? Beatae quia cumque culpa nihil neque recusandae nisi saepe impedit.
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}

export default Projects
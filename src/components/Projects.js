import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/HandCraftedHub.png";
import projImg2 from "../assets/img/EventNestle.png";
import projImg3 from "../assets/img/ExploreBharat.png";
import projImg4 from "../assets/img/LiveChatApp.png";
import projImg5 from "../assets/img/ChatApp.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Handcrafted Hub E-commerce",
      description: "React,Django,MongoDB ",
      imgUrl: projImg1,
      projectHref:"https://github.com/pruthaUpadhyay/Handcrafted-Hub"
    },
    {
      title: "EventNestle",
      description: "HTML,CSS,JS,Bootstrap",
      imgUrl: projImg2,
      projectHref:"https://github.com/Prutha-Upadhyay/Event-Planner"

    },
    {
      title: "Explore Bharat",
      description: "HTML,CSS,JS,Bootstrap",
      imgUrl: projImg3,
      projectHref:"https://github.com/Prutha-Upadhyay/Explore-Bharat"

    },
    {
      title: "Live Chat App",
      description: "Python,Flask,SocketIO",
      imgUrl: projImg4,
      projectHref:"https://github.com/Prutha-Upadhyay/Python-Live-Chat-App-main"

    },
    {
      title: "Chat App",
      description: "JAVA,JavaFX,JDBC",
      imgUrl: projImg5,
      projectHref:"https://github.com/Prutha-Upadhyay/Chat-application"

    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my best works are as shown below. For more projects and contributions check my <a
							href="https://github.com/Prutha-Upadhyay" style={{textDecoration:"none",color:"blue"}}>GitHub</a>.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        
                        {
                          projects.map((project, index) => {
                            return (
                             
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

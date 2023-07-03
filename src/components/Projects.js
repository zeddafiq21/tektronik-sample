import { Container,Col,Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/Project1.jpg"
import projImg2 from "../assets/img/project2.jpg"
import projImg3 from "../assets/img/project3.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen'


export const Projects = () => {
     const projects = [
        {
            title: "Team Tektronik" ,
            description : "TEKTRONIK ACTIVITIES",
            imgUrl : projImg1,
            link : ("www.google.com") ,
        },
        {
            title: "Team Tektronik" ,
            description : "Pemasangan PLTS",
            imgUrl : projImg2,
            link : ("www.google.com") ,

        },
        {
            title: "Team Tektronik" ,
            description : "MAINTENANCE PLTS",
            imgUrl : projImg3,
            link : ("www.google.com") ,

        },
        {
            title: "Busisness Startup" ,
            description : "Design & Development",
            imgUrl : projImg3,
            link : ("www.google.com") ,

        },
        {
            title: "Busisness Startup" ,
            description : "Design & Development",
            imgUrl : projImg1,
            link : ("www.google.com") ,

        },
        {
            title: "Team Tektronik" ,
            description : "Pemasangan PLTS",
            imgUrl : projImg2,
            link : ("www.google.com") ,

        },
     ];

     return(
        <section className="project" id="Projects">
         <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                <h2>Projects</h2>
                <p>LoremProident fugiat culpa qui elit amet voluptate sint dolore ipsum aute qui ullamco. 
                Pariatur cupidatat anim dolor reprehenderit consectetur ipsum. Aute enim dolor consequat pariatur. 
                Velit voluptate cillum in ipsum deserunt.</p>
                 </div> }
                 </TrackVisibility>

                <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                    <Nav variant="pills" classname="nav-pills mb-5 justify-content-center align-items-right" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project Recently</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Past Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Next Project
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                            {
                                projects.map((project, index) =>{
                                    return(
                                        <ProjectCard
                                        key ={index} {...project}/>
                                    )
                                })
                                
                            }
                            
                            </Row>
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return(
                                        <ProjectCard
                                        key ={index} {...project}/>
                                    )
                                })
                            }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return(
                                        <ProjectCard
                                        key ={index} {...project}/>
                                    )
                                })
                            }
                            </Row>
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img"/>
        </section>
     )
}
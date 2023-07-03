import {Container, Row, Col} from 'react-bootstrap'
import tentangKamiImg from '../assets/img/test.gif'
import 'animate.css';
import TrackVisibility from 'react-on-screen'

export const TentangKami = () => {
return (
        <section className="tentang-Kami" id="Tentang Kami">
            <Container>
            <TrackVisibility>
                {({isVisible}) =>

                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          
                <Row className="align-items-center">
                
                <h2>Tentang Kami </h2>
                
                    <Col md={6}>
                        <img src={tentangKamiImg} alt="contact us"/>
                      
                    </Col>
                    <Col md={6}>
                            <Row>
                                <Col className="px-1">
                                    <h5>1. Adipisicing duis non excepteur commodo eu non ad eiusmod tempor.</h5>
                                    <h5>2. Esse do magna ex in.</h5>
                                    <h5>3. Dolore tempor fugiat sint magna aute eiusmod eu.</h5>
                                    <h5>4. Commodo ut consectetur magna minim elit anim dolor ea mollit amet fugiat.</h5>
                                    <h5>6. Nulla aliqua excepteur fugiat aute ipsum qui eu laborum eu incididunt elit excepteur.</h5>
    
                                </Col>
                    
                                
                            </Row>
                        
                    </Col>
                    

                </Row>
                </div> }
                    </TrackVisibility>
            
            
            </Container>
        </section>
    )




}
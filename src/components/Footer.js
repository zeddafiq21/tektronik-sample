import {Container ,Row ,Col} from "react-bootstrap"
//import { MailchimpsForm } from "./MailchimpsForm";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 
export const Footer = () =>{



    return(
        <footer className="footer">
        <Container>
            <Row className="align-item-center">

             <Col sm={6}>
                <img src={logo} alt="logo"/>
             </Col>

              <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href="#1"><img src={navIcon1} alt="icon-1"/></a>
                    <a href="#2"><img src={navIcon2} alt="icon-2"/></a>
                    <a href="#3"><img src={navIcon3} alt="icon-3"/></a>
                </div>
                <p>CopyRight 2023.All right Reserved</p>
                </Col>
            
            </Row>
        
        
        </Container>
        </footer>


    )

}

export default Footer;
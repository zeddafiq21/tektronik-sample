import { useState,useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 


export const NavBar = () =>{
const [activeLink,setActiveLink] = useState('home');
const [scrolled,setScrolled] = useState(false)
useEffect (()=>{
const onScroll = () =>{
    if(window.scrollY > 50){
        setScrolled(true);
    }
    else{
        setScrolled(false);
    }
}
window.addEventListener("scroll", onScroll)
return() => window.removeEventListener("scroll" , onScroll)
},[])

const onUpadateActiveLink =(value)=>{
    setActiveLink(value);

}
  return (
    <Navbar expand="lg" className={scrolled?"scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpadateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Tentang Kami" className={activeLink === 'Tentang Kami' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpadateActiveLink('Tentang Kami')}>Tentang</Nav.Link> 
            <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpadateActiveLink('Projects')}>Projects </Nav.Link>
            <Nav.Link href="#Members" className={activeLink === 'Members' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpadateActiveLink('Members')}>Tim Kami </Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpadateActiveLink('Contact')}>Kontak</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">

                <a href="home"><img src={navIcon1} alt="" /></a>
                <a href="skill"><img src={navIcon2} alt="" /></a>
                <a href="project"><img src={navIcon3} alt="" /></a>
                
            </div>
            <button className="vvd" onClick={(console.log('connect'))}>
                <span>Sign up </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}
export default NavBar;

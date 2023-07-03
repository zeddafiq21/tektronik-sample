import { useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/logo_tektronik.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen'


export const Banner = ()=>{
   const [loopNum,setLoopNum] = useState(0);
   const [isDeleting , setIsDeleting] = useState(false) 
   const toRotate = ["Pemasangan PLTS" , "Alat Peraga Pembelajaran" , "Konsultasi Perencanaan" , 
   "Otomatisasi Peralatan Listrik", "Testing & Commisioning", "Panel Maker","PLC & Control" ];
   const [text, setText] = useState('');
   const [delta,setDelta] = useState(300 - Math.random()*100);
   const period = 2000;

   useEffect(()=> {
    let ticker = setInterval(()=>{
        tick();
    }, delta)

    return () => { clearInterval(ticker)};
   },)

    const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length +1);
    
    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }
    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true)
        setDelta(period)
    }
    else if (isDeleting && updatedText === ''){
        setIsDeleting(false)
        setLoopNum(loopNum +1)
        setDelta(500);
    }

}

    return(
    <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">TEKRONIK D-IV UNY </span>
                    <h1>{`Hallo, Selamat Datang di TEKTRONIK`}  </h1>
                    <h4>
                    <span className="wrap"> Tektronik Sebagai Workshop :  {text}</span></h4>   
                        <p>Tektronik merupakan workshop kewirausahaan yang dikembangkan oleh team DIV Teknik Elektro UNY
                        </p>
                        <button onClick={(console.log('connect'))}>Let's Work Together<ArrowRightCircle size={25} /></button>
                        </div>
                    }
                
                
                        </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt= "Header Img"/>
                </Col>
            </Row>
   
         </Container> 
    </section>
)
}
export default Banner;
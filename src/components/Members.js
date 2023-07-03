
import meter1 from "../assets/img/Tegar.png";
import meter2 from "../assets/img/Aji.png";
import meter3 from "../assets/img/Sultan.png";
import sultan from "../assets/img/Sultan.png";
import ilham from "../assets/img/Ilham.png";
import fajar from "../assets/img/Fajar.png";
import genta from "../assets/img/Genta.png";
import gamar from "../assets/img/Gamar.png";
import fatih from "../assets/img/Fatih.png";
import natalia from "../assets/img/Natalia.png";
import wanda from "../assets/img/Wanda.png";
import maudy from "../assets/img/Maudy.png";
import raja from "../assets/img/Raja.png";
import ridho from "../assets/img/Ridho.png";
import cassia from "../assets/img/cassia.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Members = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="Members">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Our Leader Team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                      
                            <div className="item"><img src={meter1} alt="Image1" url="www.instagram.com" />
                                <h5>Tegar Yohan Wijaya Tama</h5>
                                <p>Ketua</p>
                              </div>
                           
                                
                            
                            <div className="item">
                                <img src={meter2} alt="Image1" />
                                <h5>Muhammad Aji Farid Fadila</h5>
                                <p>Wakil Ketua</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image1" />
                                <h5>Khairunnisa ST.,MT.,</h5>
                                <p>Dosen Elektro</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Usman Nursusanto Spd., MT.,</h5>
                                <p>Dosen Elektro</p>
                            </div>
                        </Carousel>

                        <h2>Our Electrical Team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                      
                            <div className="item"><img src={meter1} alt="Image1" />
                                <h5>Tegar Yohan Wijaya Tama</h5>
                                <p>Eletrical</p>
                              </div>
                           
                                
                            
                            <div className="item">
                                <img src={meter2} alt="Image1" />
                                <h5>Muhammad Aji Farid Fadila</h5>
                                <p>Eletrical</p>
                            </div>
                            <div className="item">
                                <img src={sultan} alt="Image1" />
                                <h5>Sultan Maulana Alifianto</h5>
                                <p>Eletrical</p>
                            </div>
                            <div className="item">
                                <img src={ilham} alt="Image1" />
                                <h5>Ilham Pradina</h5>
                                <p>Elektrical</p>
                            </div>
                        </Carousel>
                        <h2>Our Mechanical Team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                      
                            <div className="item"><img src={fajar} alt="Image1" />
                                <h5>Fajar Subekti</h5>
                                <p>Mechanical</p>
                              </div>
                           
                                
                            
                            <div className="item">
                                <img src={genta} alt="Image1" />
                                <h5>Genta Saputra</h5>
                                <p>Mechanical</p>
                            </div>
                            <div className="item">
                                <img src={gamar} alt="Image1" />
                                <h5>Gamar Ridho Zuhriyanto</h5>
                                <p>Mecanical</p>
                            </div>
                            <div className="item">
                                <img src={fatih} alt="Image1" />
                                <h5>Muhammad Fatih Musyaffa</h5>
                                <p>Mechanical</p>
                            </div>
                            <div className="item">
                                <img src={cassia} alt="Image1" />
                                <h5>Cassia Mas Ricky Dzujalali</h5>
                                <p>Mechanical</p>
                            </div>
                        </Carousel>

                        <h2>Our Social Media Team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                      
                            <div className="item"><img src={wanda} alt="Image1" />
                                <h5>Nur Reskyasari Cut Wilanda Jufri</h5>
                                <p>Social Media</p>
                              </div>
                           
                                
                            
                            <div className="item">
                                <img src={natalia} alt="Image1" />
                                <h5>Natalia Hanlie Marjono</h5>
                                <p>Social Media</p>
                            </div>
                            <div className="item">
                                <img src={maudy} alt="Image1" />
                                <h5>Maudy Kusumawardhani</h5>
                                <p>Social Media</p>
                            </div>
                            
                        </Carousel>
                        <h2>Our Programming Team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                      
                            <div className="item"><img src={raja} alt="Image1" />
                                <h5>R. Rafiq Al Ikhsan</h5>
                                <p>Programming</p>
                              </div>
                           
                                
                            
                            <div className="item">
                                <img src={ridho} alt="Image1" />
                                <h5>Muhammad Ridho Al Fajri</h5>
                                <p>Programming</p>
                            </div>
                            <div className="item">
                                <img src={raja} alt="Image1" />
                                <h5>AI</h5>
                                <p>Programming</p>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image1" />
    </section>
  )
}

export default Members;
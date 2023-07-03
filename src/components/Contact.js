import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg"
import { Container, Row, Col } from "react-bootstrap";
export const Contact =()=>{
const formInitialDetails = {
    firstName: '',
    lastName: '',
    email : '',
    phone: '',
    message: '',
}
const [formDetails, setFormDetails] = useState(formInitialDetails)
const [ buttonText , setButtonText] = useState('send');
const [ status, setStatus] = useState({});
const onFormUpdate = (category, value) =>{
    setFormDetails({
    ...formDetails,
    [category]: value
})
   
}

const handleSubmit = async (e)=>{
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:3000/contact" , 
    {

    method : "POST",
    header: {
        "Content-Type" :"Application/json;charset=utf-8"

    },
       body : JSON.stringify(formDetails),

    });
    setButtonText("Send");
    let result =  await response.json();
    setFormDetails(formInitialDetails);
    if(result.code === 200){
        setStatus({succes: true, message: 'message sent successfully'});
    }
    else{
        setStatus({succes: false, message: 'Something went Wrong, Please try again later.'});
    }


}

return(
    <section className="contact" id="contact">
        <Container >
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="contact us"/>

                </Col>
                <Col md={6}>
                    <h2>Hubungi Kami</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value= {formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName', e.target.value)}/>

                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" value= {formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName', e.target.value)}/>
                            </Col>

                            <Col sm={6} className="px-1">
                            <input type="email" value= {formDetails.email} placeholder="Email Address" onChange={(e)=>onFormUpdate('email', e.target.value)}/>
                            </Col>

                            <Col sm={6} className="px-1">
                            <input type="tel" value= {formDetails.phone} placeholder="Phone Number" onChange={(e)=>onFormUpdate('phone', e.target.value)}/>
                            </Col>

                            <Col>
                                <textarea row="6" value= {formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success=== false?"danger" : "succes"}>{status.message}</p>
                                </Col>

                            }
                        </Row>
                    </form>
                </Col>
            
            </Row>
        
        
        
        </Container>
    </section>
)

}

export default Contact;

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap'
export const ProjectCard = ({title , description , imgUrl, link}) =>{
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imgUrl} alt ="img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>
                    <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                  >
                    {isLoading ? 'Loading…' : 'Read More'}
                  </Button>
                
                    </div>
                    
                    
                   
             </div>
            
            </div>
        </Col>
    )   
}
export default ProjectCard;
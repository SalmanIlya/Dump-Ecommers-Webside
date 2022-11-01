import Carousel from 'react-bootstrap/Carousel';
import "./style.css"
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      

          <img
className="d-block images col-xs-3  col-sm-6  col-md-7 col-lg-9" 
src="/slider/1slider.jpg"
alt="First slide"
/>
       
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  images col-xs-3  col-sm-5  col-md-7 col-lg-9 "
          src="slider/2slider.jpg"
          alt="Second slide"
        />

   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block   images  col-xs-3  col-sm-5  col-md-7 col-lg-9 "
          src="/slider/3slider.jpg"
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
import Carousel from 'react-bootstrap/Carousel';
import "./style.css"
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block images col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
          src="slider/1.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block images col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
          src="slider/2.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block images col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
          src="slider/3.jpg"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
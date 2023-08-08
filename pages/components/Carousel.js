import Carousel from 'react-bootstrap/Carousel';

function Carousels() {

  const CarouselList = [ 
      
    
      {'slug' : '/uploads/images/carousel/slide1.jpg' },
      {'slug': '/uploads/images/carousel/slide2.jpg' },

    

   
  ]
  

  return (

<>
<Carousel className="home_slider" fade>
     {
      CarouselList.map((item) => (
      
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={item.slug}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>Global Indians Info</h3>

        </Carousel.Caption>
      </Carousel.Item>
          
   


      ))
    
     }
      </Carousel>
     </>

  );
}


export default Carousels;
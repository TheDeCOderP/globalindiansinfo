import Carousel from 'react-bootstrap/Carousel';

function Carousels() {

  const CarouselList = [ 
      
    
      {'slug' : '/uploads/images/carousel/slide1.jpg' },
      {'slug': '/uploads/images/carousel/slide2.jpg' },
      {'slug': '/uploads/images/carousel/slide3.jpg' },
      {'slug': '/uploads/images/carousel/slide4.jpg' },
      {'slug': '/uploads/images/carousel/slide5.jpg' },

    

   
  ]
  

  return (

<>
<Carousel className="home_slider" fade>
     {
      CarouselList.map((item) => (
      
      <Carousel.Item interval={1000} key={item.slug}>
        <img
          className="d-block w-100"
          src={item.slug}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_section" >
        <h2>Global <br></br><span className="white">Indians</span> <span className="green">Info</span></h2>

        </Carousel.Caption>
      </Carousel.Item>
          
   


      ))
    
     }
      </Carousel>
     </>

  );
}


export default Carousels;
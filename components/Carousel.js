import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

function Carousels() {
  const CarouselList = [
    {
      'slug': '/uploads/images/carousel/slide7.jpg',
      'title': 'Global',
      'white': 'Indians',
      'green': 'Info',
      'link': '/travel',
    },
    {
      'slug': '/uploads/images/carousel/slide6.jpg',
      'white': 'Business',
      'link': '/business',
    },
    {
      'slug': '/uploads/images/carousel/slide8.jpg',
      'title': 'Jobs',
      'link': '/jobs',
    },
    {
      'slug': '/uploads/images/carousel/slide9.jpg',
      'white': 'Events',
      'link': '/events',
    },
    {
      'slug': '/uploads/images/carousel/slide10.jpg',
      'green': 'Education',
      'link': '/education',
    },
    {
      'slug': '/uploads/images/carousel/slide11.jpg',
      'white': 'News',
      'link': '/news',
    },
  ];

  return (
    <>
      <style>
        {`
          .custom-carousel-item {
            transition: transform 2s ease-in-out, opacity 2s ease-in-out;
          }
        `}
      </style>
      <Carousel className="home_slider" fade>
        {CarouselList.map((item) => (
          <Carousel.Item interval={5000} key={item.slug}>
            <img className="d-block w-100" src={item.slug} alt="First slide" />
            <Carousel.Caption className="carousel_section">
              <h2>
                {item.title} <span className="white">{item.white} </span>
                <span className="green"> {item.green} </span>
              </h2>
              <Link href={item.link}>
                <button className="button carousel_button p-2">Read More</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Carousels;
